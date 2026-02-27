# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based personal blog website. The site includes:
- Homepage (`src/pages/index.astro`)
- About page (`src/pages/about.astro`)
- Blog listing page (`src/pages/blog.astro`)
- Individual blog posts stored as Markdown files in `src/pages/posts/`
- Shared navigation component (`src/components/Navigation.astro`)
- Global styling (`src/styles/global.css`)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro ...
```

## Architecture and Structure

- **Framework**: Astro - a modern static site generator focused on performance
- **File-based routing**: Pages are created by adding files to `src/pages/`
- **Component system**: Reusable UI components in `src/components/`
- **Styling**: Global CSS in `src/styles/global.css`
- **Blog content**: Markdown files in `src/pages/posts/` with frontmatter metadata
- **Navigation**: Shared Navigation component used across pages

## Key Patterns

- Pages import global CSS and Navigation component
- Blog posts use Markdown with YAML frontmatter for metadata
- Components are simple Astro files that can be imported and reused
- Styling uses CSS variables for consistent theming
- Conditional rendering and mapping are used for dynamic content

## Testing Changes

- Run `pnpm dev` to start the development server
- Visit http://localhost:4321 to view the site
- Changes to files will hot-reload automatically
- Blog posts can be viewed at `/posts/post-name/`