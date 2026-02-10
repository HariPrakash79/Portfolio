const DEFAULT_PROFILE_URL = "https://substack.com/@hariprakashkarthikeyan";
const DEFAULT_FEED_URL = "https://hariprakashkarthikeyan.substack.com/feed";

const looksLikeRss = (xml) =>
  /<item\b[^>]*>/i.test(xml) || /<entry\b[^>]*>/i.test(xml);

const uniq = (items) => Array.from(new Set(items.filter(Boolean)));

const deriveFeedUrls = (inputUrl) => {
  if (!inputUrl) return [];

  const urls = [];
  const trimmed = inputUrl.trim();
  urls.push(trimmed);

  const userMatch = trimmed.match(/@([^/?#]+)/);
  if (userMatch) {
    const user = userMatch[1];
    urls.push(`https://substack.com/@${user}/feed`);
    urls.push(`https://substack.com/@${user}?format=rss`);
    urls.push(`https://${user}.substack.com/feed`);
  }

  if (trimmed.includes(".substack.com")) {
    urls.push(`${trimmed.replace(/\/+$/, "")}/feed`);
  }

  return uniq(urls);
};

const stripCdata = (value) =>
  value.replace(/^<!\[CDATA\[/i, "").replace(/\]\]>$/i, "");

const extractTag = (block, tag) => {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const match = block.match(re);
  if (!match) return "";
  return stripCdata(match[1].trim());
};

const extractLinkHref = (block) => {
  const linkMatch = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  if (linkMatch) return linkMatch[1];
  return extractTag(block, "link");
};

const extractFeedHref = (html, baseUrl) => {
  const linkMatch = html.match(
    /<link[^>]+rel=["']alternate["'][^>]+type=["']application\/(rss|atom)\+xml["'][^>]+href=["']([^"']+)["'][^>]*>/i
  );
  if (!linkMatch) return "";
  try {
    return new URL(linkMatch[2], baseUrl).toString();
  } catch {
    return linkMatch[2];
  }
};

const stripHtml = (value) =>
  value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value, max) => {
  if (value.length <= max) return value;
  return value.slice(0, max).replace(/\s+\S*$/, "").trim() + "...";
};

const parseRssItems = (xml) => {
  const items = xml
    .split(/<item\b[^>]*>/i)
    .slice(1)
    .map((chunk) => chunk.split(/<\/item>/i)[0]);

  return items.map((block) => {
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    const content =
      extractTag(block, "content:encoded") || extractTag(block, "description");
    const excerpt = truncate(stripHtml(content), 200);

    const imageMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    const image = imageMatch ? imageMatch[1] : "";

    return {
      title,
      link,
      date: pubDate,
      excerpt,
      image,
    };
  });
};

const parseAtomEntries = (xml) => {
  const entries = xml
    .split(/<entry\b[^>]*>/i)
    .slice(1)
    .map((chunk) => chunk.split(/<\/entry>/i)[0]);

  return entries.map((block) => {
    const title = extractTag(block, "title");
    const link = extractLinkHref(block);
    const pubDate = extractTag(block, "updated") || extractTag(block, "published");
    const content = extractTag(block, "content") || extractTag(block, "summary");
    const excerpt = truncate(stripHtml(content), 200);

    const imageMatch =
      block.match(/<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*>/i) ||
      content.match(/<img[^>]+src=["']([^"']+)["']/i);
    const image = imageMatch ? imageMatch[1] : "";

    return {
      title,
      link,
      date: pubDate,
      excerpt,
      image,
    };
  });
};

const parseFeed = (xml) => {
  if (/<item\b[^>]*>/i.test(xml)) return parseRssItems(xml);
  if (/<entry\b[^>]*>/i.test(xml)) return parseAtomEntries(xml);
  return [];
};

export const handler = async (event) => {
  const limit = Math.max(
    1,
    Math.min(6, parseInt(event.queryStringParameters?.limit || "3", 10))
  );

  const explicitFeed = event.queryStringParameters?.feed;
  const envFeed = process.env.SUBSTACK_FEED_URL;
  const envProfile = process.env.SUBSTACK_PROFILE_URL;

  const candidates = uniq([
    ...(explicitFeed ? [explicitFeed] : []),
    ...(envFeed ? [envFeed] : []),
    DEFAULT_FEED_URL,
    ...deriveFeedUrls(envProfile),
    ...deriveFeedUrls(DEFAULT_PROFILE_URL),
  ]);

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "portfolio-rss-fetcher/1.0" },
      });
      if (!res.ok) continue;
      const xml = await res.text();

      if (looksLikeRss(xml)) {
        const posts = parseFeed(xml).slice(0, limit);
        return {
          statusCode: 200,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
          body: JSON.stringify({ source: url, posts }),
        };
      }

      const discoveredFeed = extractFeedHref(xml, url);
      if (!discoveredFeed) continue;
      const feedRes = await fetch(discoveredFeed, {
        headers: { "User-Agent": "portfolio-rss-fetcher/1.0" },
      });
      if (!feedRes.ok) continue;
      const feedXml = await feedRes.text();
      if (!looksLikeRss(feedXml)) continue;

      const posts = parseFeed(feedXml).slice(0, limit);
      return {
        statusCode: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
        body: JSON.stringify({ source: discoveredFeed, posts }),
      };
    } catch (error) {
      continue;
    }
  }

  return {
    statusCode: 500,
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      error:
        "Unable to fetch Substack feed. Set SUBSTACK_FEED_URL in Netlify env vars.",
    }),
  };
};
