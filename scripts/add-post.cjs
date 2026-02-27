#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

async function main() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const year = pad(now.getFullYear() % 100);
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());
  const timestamp = `${year}-${month}-${day}_${hour}-${minute}-${second}`;
  const fileName = `${timestamp}.md`;
  const filePath = path.join('src', 'pages', 'posts', fileName);
  const frontmatter = `---
title: "Untitled"
date: "${now.toISOString()}"
description: ""
tags: []
---\n`;
  await fs.writeFile(filePath, frontmatter, 'utf8');
  console.log(`Created new post: ${filePath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});