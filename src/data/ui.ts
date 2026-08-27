/*
 * UI strings — every label and button, in English and Spanish.
 * The active language comes from Astro's i18n router (see astro.config.mjs).
 *
 * How to edit:
 *   - Change the English text under the `en:` key.
 *   - Change the Spanish text under the `es:` key.
 *   - Keep the KEY names the same (nav.profile, hero.availability, etc.),
 *     the components read them by key.
 */

export type Lang = "en" | "es";

export const ui = {
  en: {
    // Nav
    "nav.profile": "Profile",
    "nav.proof": "Proof",
    "nav.cv": "Request CV",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    // Sections
    "section.quickFacts": "At a glance",
    "section.timeline": "The story",
    "section.skills": "Skills",
    "section.certs": "Certifications",
    "section.certsLearning": "Currently studying: MD-102 Microsoft Endpoint Administrator",
    "section.contact": "Contact",

    // Quick facts labels
    "facts.stack": "Stack",
    "facts.certs": "Certifications",
    "facts.languages": "Languages",
    "facts.location": "Location & availability",

    // Contact labels
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.availableNow": "Available now",

    // Buttons
    "cta.letsTalk": "Let's talk",
    "cta.requestCv": "Request CV",
    "cta.contact": "Contact",
    "cta.email": "Email me",
    "cta.bookCall": "Book a call",

    // Request CV page
    "requestCv.title": "Request my CV",
    "requestCv.lead": "Send me a quick note and I'll get back to you with the latest version of my CV within 24 hours.",
    "requestCv.name": "Your name",
    "requestCv.company": "Company",
    "requestCv.email": "Your email",
    "requestCv.role": "Role you're hiring for (optional)",
    "requestCv.message": "Anything else you'd like to add (optional)",
    "requestCv.submit": "Send request",
    "requestCv.note": "Your message goes straight to my inbox. I'll reply with the latest CV within 24 hours.",
    "requestCv.back": "← Back to profile",

    // Thanks page
    "thanks.title": "Message received",
    "thanks.body": "Thanks for reaching out. I'll come back to you within 24 hours with the latest version of my CV.",
    "thanks.back": "← Back to profile",

    // Proof page
    "proof.title": "Proof",
    "proof.lead": "Documentation, labs and content I've produced across enterprise and MSP IT support.",
    "proof.filterAll": "All",
    "proof.filterCase": "Case studies",
    "proof.filterCommunity": "Community",
    "proof.back": "← Back to profile",
    "proof.readMore": "Read more",
    "proof.viewLink": "View",
    "proof.caseChallenge": "Challenge",
    "proof.caseWhat": "What I did",
    "proof.caseResult": "Result",

    // Theme toggle
    "theme.light": "Switch to light theme",
    "theme.dark": "Switch to dark theme",

    // Footer
    "footer.tagline": "IT Support Engineer · Dublin, Ireland",
  },

  es: {
    // Nav
    "nav.profile": "Perfil",
    "nav.proof": "Pruebas",
    "nav.cv": "Solicitar CV",
    "nav.contact": "Contacto",
    "nav.menu": "Menú",

    // Sections
    "section.quickFacts": "Un vistazo rápido",
    "section.timeline": "La historia",
    "section.skills": "Skills",
    "section.certs": "Certificaciones",
    "section.certsLearning": "Cursando actualmente: MD-102 Microsoft Endpoint Administrator",
    "section.contact": "Contacto",

    // Quick facts labels
    "facts.stack": "Stack",
    "facts.certs": "Certificaciones",
    "facts.languages": "Idiomas",
    "facts.location": "Ubicación y disponibilidad",

    // Contact labels
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Ubicación",
    "contact.availability": "Disponibilidad",
    "contact.availableNow": "Disponible ahora",

    // Buttons
    "cta.letsTalk": "Hablemos",
    "cta.requestCv": "Solicitar CV",
    "cta.contact": "Contacto",
    "cta.email": "Escribime",
    "cta.bookCall": "Agendar una llamada",

    // Request CV page
    "requestCv.title": "Solicitar mi CV",
    "requestCv.lead": "Mandame una nota corta y te respondo con la última versión de mi CV en menos de 24 horas.",
    "requestCv.name": "Tu nombre",
    "requestCv.company": "Empresa",
    "requestCv.email": "Tu email",
    "requestCv.role": "Puesto que estás cubriendo (opcional)",
    "requestCv.message": "Cualquier otra cosa que quieras agregar (opcional)",
    "requestCv.submit": "Enviar solicitud",
    "requestCv.note": "Tu mensaje llega directo a mi inbox. Te respondo con el CV actualizado en menos de 24 horas.",
    "requestCv.back": "← Volver al perfil",

    // Thanks page
    "thanks.title": "Mensaje recibido",
    "thanks.body": "Gracias por escribir. Te respondo con la última versión de mi CV en menos de 24 horas.",
    "thanks.back": "← Volver al perfil",

    // Proof page
    "proof.title": "Pruebas",
    "proof.lead": "Documentación, labs y contenido que he producido en soporte IT enterprise y MSP.",
    "proof.filterAll": "Todo",
    "proof.filterCase": "Casos",
    "proof.filterCommunity": "Comunidad",
    "proof.back": "← Volver al perfil",
    "proof.readMore": "Leer más",
    "proof.viewLink": "Ver",
    "proof.caseChallenge": "Desafío",
    "proof.caseWhat": "Qué hice",
    "proof.caseResult": "Resultado",

    // Theme toggle
    "theme.light": "Cambiar a tema claro",
    "theme.dark": "Cambiar a tema oscuro",

    // Footer
    "footer.tagline": "IT Support Engineer · Dublín, Irlanda",
  },
} as const;

export type UiKey = keyof typeof ui.en;

/**
 * Helper: look up a UI string by language + key.
 * Usage in .astro:  const t = tr(lang); <p>{t("nav.profile")}</p>
 */
export function tr(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? key;
}
