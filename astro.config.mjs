import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import robotsConfig from './robots-txt.config';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://iztechai.com',
  integrations: [tailwind(), robotsTxt(robotsConfig), sitemap(), react()]
});