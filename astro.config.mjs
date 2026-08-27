// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/*
 * Astro configuration.
 *
 * site:
 *   Absolute base URL. Required for sitemap, canonical, and Open Graph.
 *
 * i18n:
 *   - English is the default language and lives at the root: /, /proof
 *   - Spanish lives under /es/: /es/, /es/proof
 *   - We do NOT auto-detect the browser language: EN always shows first
 *     for non-Spanish browsers (per the brief), and a toggle lets the
 *     visitor switch to ES.
 *
 * integrations:
 *   - @astrojs/sitemap: generates /sitemap-index.xml + /sitemap-0.xml with
 *     hreflang alternates for both languages. /thanks and /es/thanks are
 *     filtered out (they're only reached via a form submit; no SEO value).
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
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-IE",
          es: "es-ES",
        },
      },
      filter: (page) => !/\/thanks\/?$/.test(page),
    }),
  ],
});
