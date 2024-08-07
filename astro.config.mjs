import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://hermanowicz.co',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'material-theme',
        dark: 'material-theme-darker'
      }
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});