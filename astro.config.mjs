// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { remarkReadingTime } from './remark-reading-time.mjs';


import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicknettleton.github.io', // see https://docs.astro.build/en/guides/deploy/github/
  // base: '/nicknettleton.github.io', // not needed, see above
  integrations: [mdx(), sitemap(), react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      remarkMath,
      // remarkToc,
      // [remarkCollapse, { test: "Table of contents" }],
    ],
    rehypePlugins: [rehypeKatex],
  },
});