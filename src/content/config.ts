/*
 * Content Collections — describes the shape of the Proof cards
 * so Astro can validate every .md file at build time.
 *
 * There are two kinds of cards:
 *   - type: "case"      → Challenge / What I did / Result mini case study
 *   - type: "community" → Free-form community entry (speaking, mentoring, etc.)
 *
 * If you add a new .md and forget a field, `npm run dev` will tell you
 * exactly what's missing. Safer than deploying a broken card.
 */

import { defineCollection, z } from "astro:content";

const proof = defineCollection({
  type: "content",
  schema: z.object({
    // Type of piece — controls the filter chip and the card layout.
    type: z.enum(["case", "community"]),

    // Short evocative title shown at the top of the card.
    title: z.string(),

    // "case" cards use these three fields (Challenge / What I did / Result).
    challenge: z.string().optional(),
    what: z.string().optional(),
    result: z.string().optional(),

    // "community" cards use `summary` for a 40-90 word paragraph in first person.
    summary: z.string().optional(),

    // Human-friendly date or stage (e.g. "2026", "2023–2026", "August 2026").
    date: z.string(),

    // Topical tags (2-5 short strings).
    tags: z.array(z.string()),

    // Optional outbound links (each with a label and href).
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .optional(),

    // Sort order — smaller numbers appear first.
    order: z.number().default(100),

    // Draft cards are hidden from the grid until draft = false.
    draft: z.boolean().default(false),
  }),
});

export const collections = { proof };
