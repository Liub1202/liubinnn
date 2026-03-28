---
title: Setting Up a Content-Driven Blog
description: A small content system built on local markdown files keeps the first version simple and easy to evolve.
date: 2026-03-27
tags:
  - blog
  - content
  - markdown
draft: false
readingTime: 5 min
location: Shanghai
---

Using local markdown files for blog content keeps the first version focused.

There is no database, no admin layer, and no external CMS. Instead, the structure is predictable:

- posts live in `content/posts/`
- frontmatter describes the article
- the app reads content through `@nuxt/content`

That gives us a strong foundation for list pages, detail pages, and tag pages later on.
