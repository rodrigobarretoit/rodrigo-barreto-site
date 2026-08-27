/*
 * Content Collections — describes the shape of the Proof cards
 * so Astro can validate every .md file at build time.
 *
 * If you add a new .md and forget a field, `npm run dev` will
 * tell you exactly what's missing. That's on purpose: it's
 * safer than deploying a broken card.
 */

import { defineCollection, z } from "astro:content";

const proof = defineCollection({
  type: "content",
  schema: z.object({
    // Type of piece — must match one of the filter categories
    type: z.enum(["kb", "labs", "video", "community"]),
    // Card title (short, evocative)
    title: z.string(),
    // 40-90 word summary in first person
    summary: z.string(),
    // Human-friendly date or stage (e.g. "August 2026", "2024-2026")
    date: z.string(),
    // Topical tags (2-5 short strings)
    tags: z.array(z.string()),
    // Optional outbound links — each with a label and href
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .optional(),
    // Sort order — smaller numbers appear first
    order: z.number().default(100),
    // Draft cards are hidden from the grid until draft = false
    draft: z.boolean().default(false),
  }),
});

export const collections = { proof };
