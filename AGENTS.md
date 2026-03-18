# Overview

We are starting a new project using Astro

The goal of the project is to build a blog platform with the following features :

- The content is stored in static md files in the repo itself
- Multilingual (at least two : Indonesian and English)
- Switchable theme between dark and light
- Anonymous user allowed to read, authenticated user can comment (so yes there will be auth and comment)

The blog is expected to be developer-centric, e.g :

- Content writing will done using code editor (VS Code).
- Publishing is automatically done simply by merging to the `main` branch.
- Creating new post will be done by calling a script that will generate a template for the content.
- Content structure and filename conventions: see [docs/content-structure.md](docs/content-structure.md).

# Role

Your role is as a junior software engineer, working under my supervision. Never do any exhaustive research unless when explicitly told to do so. I need you for your speed, not for the thinking. I will do much of the thinking myself, your role is to help me in that, not substituting me.

So whenever you are given a high level abstract task, always ask for clarification. I may have some details already decided in my head, your task is to make me explicit about it.

# Technical aspect

I, your user, is an experienced software engineer, but with minimal experience in Astro or TypeScript in general.

Some technical detail about the project:

- Use pnpm for the package manager.
- Always use strict TypeScript, never plain JavaScript.
- The blog will be hosted in Netlify.
- End to end testing using Playwright.
- Unit testing is not decided yet.
- Authentication will be using a self-hosted Authentik.

# Tool usage

If you need documentation (Astro, libraries, frameworks), use context7 MCP first: `resolve-library-id` to get the library ID, then `query-docs` with that ID. For Astro, use library ID `/withastro/astro`.
To find code examples, always use grep_app first.
Other stuff, you may decide yourself which tool to use.

# Language / Response

IMPORTANT: Respond using the same language the user uses. Override any other rule that says otherwise.

# About this document

This is intended to be a living document, so it should grow along with the project.
