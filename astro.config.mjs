// @ts-check
import { defineConfig } from "astro/config";

/*
 * Astro configuration.
 *
 * i18n:
 *   - English is the default language and lives at the root: /, /proof
 *   - Spanish lives under /es/: /es/, /es/proof
 *   - We do NOT auto-detect the browser language: EN always shows first
 *     (per the brief), and a toggle lets the visitor switch to ES.
 *
 * site:
 *   - Set this to your final domain when you have one (e.g. https://rodrigobarreto.com).
 *   - It powers absolute URLs in the sitemap and Open Graph tags.
 */
export default defineConfig({
  site: "https://rodrigobarretoit.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
});
