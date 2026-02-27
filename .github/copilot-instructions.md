# AI Coding Agent Instructions - Personal Blog

## Project Overview

This is an **Astro v5 static site generator** project initialized from the minimal starter template. It's a personal blog platform built for fast, content-focused development. The project uses **pnpm** as the package manager and TypeScript with strict type checking.

## Architecture & Key Concepts

### File Structure

- **`src/pages/`** – Astro's file-based router; each `.astro` or `.md` file becomes a route (e.g., `src/pages/index.astro` → `/`)
- **`src/components/`** – (Not yet created) for reusable Astro/React/Vue components
- **`public/`** – Static assets served as-is (images, fonts, etc.)
- **`astro.config.mjs`** – Configuration file; currently minimal, extend here for plugins/integrations
- **`.astro/`** – Auto-generated TypeScript definitions (don't edit)

### Technology Stack

- **Astro 5.16+** – SSG framework; renders to static HTML by default
- **TypeScript** – Strict mode (`astro/tsconfigs/strict`)
- **pnpm** – Package manager

## Development Workflows

### Essential Commands

| Command                        | Purpose                                                      |
| ------------------------------ | ------------------------------------------------------------ |
| `pnpm dev`                     | Start dev server (http://localhost:4321); hot reload enabled |
| `pnpm build`                   | Generate production site to `./dist/`                        |
| `pnpm preview`                 | Preview production build locally                             |
| `pnpm astro add <integration>` | Add Astro integrations (e.g., React, MDX)                    |

### Git Workflow

The project uses **Git Flow**:

- Feature branches: `git flow feature start <feature-name>`
- Example: Currently on `feature/blog-tutorial` branch

## Project-Specific Conventions

### Astro Component Patterns

1. **Script Frontmatter** – Code between `---` in `.astro` files runs server-side only; never exposed to browser
2. **Static Site Focus** – No runtime JavaScript by default; use `client:*` directives only when interactive features are needed
3. **Route Generation** – File names become routes: `src/pages/about.astro` → `/about`

### TypeScript Configuration

- Strict mode enforced; avoid `any` types
- Generated types in `.astro/types.d.ts` provide Astro API intellisense

### Build Artifacts

- Production output: `dist/` (git-ignored)
- Generated types: `.astro/` (git-ignored)
- Dependencies: `node_modules/` (git-ignored)

## Before Making Changes

1. Verify the blog structure is still in early stages (minimal template)
2. Check `astro.config.mjs` for any integrations before adding components
3. Run `pnpm build` to validate changes don't break static generation
4. For new routes, follow the `src/pages/` file-based pattern; don't use custom routing

## Common Tasks

- **Add a page:** Create `src/pages/about.astro` or `src/pages/about.md`
- **Add reusable UI:** Create in `src/components/` and import in `.astro` files
- **Add global styles:** Link in page `<head>` or use Astro's `<style>` blocks
- **Deploy:** Commit built `dist/` or use Astro's deployment integrations
