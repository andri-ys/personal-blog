/**
 * Utilities for blog content: filename parsing and entry ID helpers.
 */

export const FILENAME_REGEX =
  /^(\d{4}-\d{2}-\d{2})_(\d{2})-(\d{2})-(\d{2})_(.+)\.(en|id)\.md$/;

/**
 * Parse a blog filename to extract slug and language.
 *
 * @param entryPath - Full path or basename, e.g. "2025-03-02_14-30-00_my-post.en.md"
 * @returns `{ slug, lang }` or null if the path doesn't match the expected format
 *
 * @example
 * parseFilename("2025-03-02_14-30-00_my-first-post.en.md")
 * // => { slug: "my-first-post", lang: "en" }
 *
 * parseFilename("src/content/blog/2025-03-02_14-30-00_my-first-post.id.md")
 * // => { slug: "my-first-post", lang: "id" }
 *
 * parseFilename("invalid.md")
 * // => null
 */
export function parseFilename(entryPath: string): {
  slug: string;
  lang: "en" | "id";
} | null {
  const basename = entryPath.split("/").pop() ?? entryPath;
  const match = basename.match(FILENAME_REGEX);
  if (!match) return null;
  const [, , , , , slug, lang] = match; // skip date, HH, mm, ss
  return { slug, lang: lang as "en" | "id" };
}

export type BlogEntryId = `${string}--en` | `${string}--id`;

/**
 * Build a blog entry ID from slug and language.
 *
 * @example
 * getBlogEntryId("my-first-post", "en")
 * // => "my-first-post--en"
 */
export function getBlogEntryId(slug: string, lang: "en" | "id"): BlogEntryId {
  return `${slug}--${lang}`;
}

/**
 * Parse a blog entry ID back into slug and language.
 *
 * @param id - Entry ID, e.g. "my-first-post--en"
 * @returns `{ slug, lang }` or null if the ID format is invalid
 *
 * @example
 * parseBlogEntryId("my-first-post--en")
 * // => { slug: "my-first-post", lang: "en" }
 *
 * parseBlogEntryId("slug-with--dashes--id")
 * // => { slug: "slug-with--dashes", lang: "id" }
 *
 * parseBlogEntryId("no-dashes")
 * // => null
 */
export function parseBlogEntryId(
  id: string,
): { slug: string; lang: "en" | "id" } | null {
  const lastDash = id.lastIndexOf("--");
  if (lastDash === -1) return null;
  const slug = id.slice(0, lastDash);
  const lang = id.slice(lastDash + 2);
  if (lang !== "en" && lang !== "id") return null;
  return { slug, lang };
}
