import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = process.env.SITE_BASE ?? '/Poor-Louis-Labs/';

export default defineConfig({
  site: 'https://epi13.github.io',
  base,
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
