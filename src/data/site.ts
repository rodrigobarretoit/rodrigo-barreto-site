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

  // The CV is not publicly downloadable — recruiters use the /request-cv
  // form and Rodrigo replies with the latest PDF by email. If you ever
  // want to publish a direct download, add:
  //   cvPath: "/cv/Rodrigo-Barreto-CV.pdf",
  // then wire an <a download href={site.cvPath}> into a component.

  // Scheduling — Cal.com link for the "Book a call" button in Contact.
  // Points to the 30-minute event type (default for intro calls with recruiters).
  // If you rename your Cal.com username later (Settings → General → Username),
  // update the middle segment of this URL to the new one.
  scheduleUrl: "https://cal.com/rodrigo-roa-rod-mlzvvs/30min",

  // Domain — used in Open Graph tags and canonical links.
  domain: "rodrigobarretoit.com",
} as const;
