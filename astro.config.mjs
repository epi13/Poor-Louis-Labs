import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = process.env.SITE_BASE ?? '/';
const site = process.env.SITE_URL ?? 'https://www.poorlouislabs.com';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
