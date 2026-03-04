---
# Indonesian (id)
id: "0cf0be0b-2342-4755-aefd-12b295e3a08e"
title: "Understanding Content Collections"
description: "Cara Astro Content Collections mengatur dan memvalidasi konten Anda."
publishDate: "2025-12-05T09:00:00"
draft: false
# Optional fields:
# tags: []
coverImage: "https://picsum.photos/seed/understanding-content-collections/800/400"
# updatedDate: ""
---

Content Collections di Astro membantu Anda mengelola file Markdown, MDX, dan data dengan keamanan tipe. Definisikan skema dengan Zod dan Astro memvalidasi frontmatter saat build.

Gunakan `getCollection` untuk mengambil semua entri atau `getEntry` untuk satu postingan. Gabungkan dengan glob loader untuk memuat konten dari direktori mana pun. Collections menjaga konten Anda terorganisir dan tipe tetap sinkron.

