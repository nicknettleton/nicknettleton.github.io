---
title: "This Stack: Efficiency as a Design Principle"
description: "I chose Astro, Tailwind and GitHub Pages for this site. Here's why."
pubDate: "05 Oct 2025"
---

I wanted to share a few notes on the technical architecture of this site.

My requirements were specific: something fast to design and build for, so I can concentrate on content rather than build; no running costs; zero maintenance; lightening fast for end users; easy to move away from if I change my mind in the future.

This sounds suspiciously like what most organisations need, albeit on a very different scale: high velocity, low overhead, open standards.

## Architecture

I used [Astro](https://astro.build/) for the build, paired with [Tailwind](https://tailwindcss.com/) for styling.

Astro compiles everything to static pages, which is ideal for this use case: I can now just push the code to [GitHub Pages](https://docs.github.com/en/pages) (or [CloudFlare Pages](https://pages.cloudflare.com/) or similar) and it is served immediately from the edge, lightening-fast to users.

This architecture complete eliminates the need for me to manage infrastructure, patch servers, or worry about scaling. That's a Big Tick.

## Content Workflow

I'm writing content in plain text using [Markdown](https://www.markdownguide.org/). This saves the headache of running a database or CMS, and ensures my content is portable and future-proof.

For larger projects Astro can be paired with a headless CMS like [Contentful](https://www.contentful.com/), which has worked beautifully for a complex, large-scale project I have been working on lately.

## Design details

Long-form text is styled using [Tailwind Typography](https://tailwindcss-typography.vercel.app/). It provides excellent reading clarity out of the box, but fine-tuning of the prose class is needed for a polished feel.

Mathematical formulae (essential for AI writing) are rendered at build-time using [Katex](https://katex.org/).

Most of the Icons are from Google's [Material set](https://icon-sets.iconify.design/ic/) via Iconify, supplemented with custom assets designed in [Figma](http://figma.com/). Being able to copy/paste SVG code from Figma directly into an Astro component is a massive workflow accelerator.

## Result

A platform that is fast, flexible, cost-efficient, and does exactly what I need. It allows me to focus on the content, not the plumbing. Plus an excellent all-round developer experience.