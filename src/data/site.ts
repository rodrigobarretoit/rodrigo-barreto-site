/*
 * Site-level data — things that stay the same in both languages.
 * Edit this file to change your name, contact info, download links, etc.
 */

import fs from "node:fs";
import path from "node:path";

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

  // Path to your CV PDF (served from /public). The Download CV buttons
  // read `cvExists` below and disable themselves automatically if the
  // file isn't present in the repo. To publish your CV: drop the PDF at
  // public/cv/Rodrigo-Barreto-CV.pdf and commit + push.
  cvPath: "/cv/Rodrigo-Barreto-CV.pdf",

  // Scheduling — Cal.com link for the "Book a call" button in Contact.
  // Points to the 30-minute event type (default for intro calls with recruiters).
  // If you rename your Cal.com username later (Settings → General → Username),
  // update the middle segment of this URL to the new one.
  scheduleUrl: "https://cal.com/rodrigo-roa-rod-mlzvvs/30min",

  // Domain — used in Open Graph tags and canonical links.
  domain: "rodrigobarretoit.com",
} as const;

/**
 * Runs at build time (Node context). Checks whether the CV PDF actually
 * exists in /public. Components use this to render "Download CV" as an
 * active link when the file is there, or as a disabled state ("CV coming
 * soon") when it isn't — so we never ship a broken 404 download.
 */
export const cvExists: boolean = (() => {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", site.cvPath));
  } catch {
    return false;
  }
})();
