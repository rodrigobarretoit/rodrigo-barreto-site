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

  // CV is sent by request. The "Request CV" buttons in the nav / hero go
  // to a dedicated page (/request-cv) with a small form. Submitting the form
  // opens the visitor's default email client with subject + body pre-filled.
  // If you ever want a public PDF download instead, add `cvPath: "/cv/…"`
  // and swap the /request-cv link for `<a download href={site.cvPath}>`.

  // Scheduling — Cal.com link for the "Book a call" button in Contact.
  // Points to the 30-minute event type (default for intro calls with recruiters).
  // If you rename your Cal.com username later (Settings → General → Username),
  // update the middle segment of this URL to the new one.
  scheduleUrl: "https://cal.com/rodrigo-roa-rod-mlzvvs/30min",

  // Domain — bump this when you have a real one; used in Open Graph tags.
  domain: "rodrigobarretoit.com",
} as const;

