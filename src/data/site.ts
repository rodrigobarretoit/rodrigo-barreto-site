/*
 * Site-level data — things that stay the same in both languages.
 * Edit this file to change your name, contact info, download links, etc.
 */

export const site = {
  name: "Rodrigo Barreto",
  initials: "RB",
  role: "IT Support Engineer",
  location: "Dublin, Ireland",

  // Public contact — NOTHING sensitive here (no phone, no address).
  email: "rodrigobarretoit@gmail.com",
  linkedin: {
    label: "linkedin.com/in/rodrigobarretoroa",
    href: "https://www.linkedin.com/in/rodrigobarretoroa",
  },

  // CV is sent by request — the button opens the visitor's email client
  // with a pre-filled subject so you can see who asked and reply with the PDF.
  // If you ever want a public download instead, add `cvPath: "/cv/…"` here
  // and swap the mailto for a plain <a download href={site.cvPath}> in the
  // three components that use `cvRequestMailto` (Nav, Hero, Contact).
  cvRequestSubject: "CV request from your site",

  // Domain — bump this when you have a real one; used in Open Graph tags.
  domain: "rodrigobarreto.example",
} as const;

/**
 * Builds the "Request CV" mailto link with a pre-filled subject.
 * Kept as a helper so all three CTA buttons share one source of truth.
 */
export const cvRequestMailto =
  `mailto:${site.email}?subject=${encodeURIComponent(site.cvRequestSubject)}`;
