---
# English (en)
id: "0cf0be0b-2342-4755-aefd-12b295e3a08e"
title: "Understanding Content Collections"
description: "How Astro Content Collections organize and validate your content."
publishDate: "2025-12-05T09:00:00"
draft: false
# Optional fields:
# tags: []
coverImage: "https://picsum.photos/seed/understanding-content-collections/800/400"
# updatedDate: ""
authorId: "andri"
---

Content Collections in Astro help you manage Markdown, MDX, and data files with type safety. Define a schema with Zod and Astro validates your frontmatter at build time.

Use `getCollection` to fetch all entries or `getEntry` for a single post. Combine with the glob loader to load content from any directory. Collections keep your content organized and your types in sync.

