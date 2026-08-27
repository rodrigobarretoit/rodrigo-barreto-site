/*
 * Long-form content of the Profile page — hero, quick facts, timeline,
 * skills, certifications and the closing quote — in both languages.
 *
 * How to edit:
 *   - Every block has an `en:` and `es:` field. Change whichever text
 *     you need, keep the same shape.
 *   - Timeline: each item has a year label, a title, and a body.
 *     - Use **double asterisks** around numbers or role names to render
 *       them BOLD (the component handles the markup).
 *     - Keep body paragraphs between 40 and 100 words to stay scannable.
 *   - To add a new timeline milestone, copy any object in the `timeline`
 *     array and edit the year/title/body.
 */

import type { Lang } from "./ui";

// -----------------------------------------------------------
// HERO
// -----------------------------------------------------------
/*
 * `pitch` is an ARRAY of paragraphs — the first one renders as a bold "lead"
 * headline, the rest as regular supporting text. To add or reorder lines,
 * just edit the strings in the array (both `en` and `es`).
 */
export const hero = {
  en: {
    eyebrow: "IT Support Engineer",
    // The name renders in two spans so we can highlight the surname in amber.
    firstName: "Rodrigo",
    lastName: "Barreto",
    pitch: [
      "10+ years of experience delivering reliable IT at enterprise scale.",
      "Supporting 500+ users across 8 countries, maintaining 100% Windows Autopilot compliance, and managing IT operations in global environments.",
      "Currently leading a company-wide PC refresh for a global reinsurer's Dublin office. Combining hands-on technical expertise with large-scale IT delivery.",
    ],
    availability:
      "Available now · Dublin · EU citizen, full right to work in Ireland and the EU",
  },
  es: {
    eyebrow: "IT Support Engineer",
    firstName: "Rodrigo",
    lastName: "Barreto",
    pitch: [
      "Más de 10 años entregando IT confiable a escala enterprise.",
      "Soporte a 500+ usuarios en 8 países, 100% de compliance en Windows Autopilot y gestión de operaciones IT en entornos globales.",
      "Actualmente liderando un refresh de PC a nivel compañía para la oficina de Dublín de una reaseguradora global. Combinando expertise técnico hands-on con entrega IT a gran escala.",
    ],
    availability:
      "Disponible ahora · Dublín · Ciudadano UE, con derecho pleno a trabajar en Irlanda y la UE",
  },
} as const;

// -----------------------------------------------------------
// QUICK FACTS (scan bar under the hero)
// -----------------------------------------------------------
export const quickFacts = {
  en: [
    {
      label: "Stack",
      value:
        "Microsoft 365 · Intune · Entra ID · Active Directory · Exchange Online · Windows 10/11 · ServiceNow · ITIL",
    },
    {
      label: "Certifications",
      value: "CompTIA A+ · ITIL v4 Foundation · Microsoft AZ-900",
    },
    {
      label: "Languages",
      value: "English (Fluent) · Spanish (Native) · Portuguese (Fluent)",
    },
    {
      label: "Location & availability",
      value: "Dublin, Ireland · Available now",
    },
  ],
  es: [
    {
      label: "Stack",
      value:
        "Microsoft 365 · Intune · Entra ID · Active Directory · Exchange Online · Windows 10/11 · ServiceNow · ITIL",
    },
    {
      label: "Certificaciones",
      value: "CompTIA A+ · ITIL v4 Foundation · Microsoft AZ-900",
    },
    {
      label: "Idiomas",
      value: "Inglés (fluido) · Español (nativo) · Portugués (fluido)",
    },
    {
      label: "Ubicación y disponibilidad",
      value: "Dublín, Irlanda · Disponible ahora",
    },
  ],
} as const;

// -----------------------------------------------------------
// TIMELINE — the professional arc, first person.
// -----------------------------------------------------------
type TimelineItem = { year: string; title: string; body: string };

export const timeline: Record<Lang, TimelineItem[]> = {
  en: [
    {
      year: "2016 · Villarrica, Paraguay",
      title: "The person you called",
      body: "I started as an **IT Support Technician** at Electro Info, covering **30+ business clients** on site: hardware, networking, printers, whatever broke. Small town, no backup. That is where I learned support is about people, not machines.",
    },
    {
      year: "2019 · Leading the escalations",
      title: "First time owning a system, not just a ticket",
      body: "I moved up to **Technical Support Lead**, running a team of **4 engineers** as the escalation point for complex incidents and administering Active Directory across multi-domain environments. The first time I owned a system, not just a ticket.",
    },
    {
      year: "2022 · Dublin",
      title: "Starting again on purpose",
      body: "I moved to Dublin and completed a **Higher Diploma in Computing Science at CCT College**, to rebuild my career in a new market.",
    },
    {
      year: "2023 · The dedicated engineer",
      title: "One customer, 500+ users, 8 countries",
      body: "I joined an MSP in Dublin, first in the pool doing imaging and hardware, then assigned as the dedicated engineer for an international pharmaceutical company. A **two-person team**, primary point of contact for **500+ users and 500+ endpoints across 8 countries**.",
    },
    {
      year: "2023–2026 · Doing it properly at scale",
      title: "Modernise the fleet, cut the toil",
      body: "I led the full migration to **Windows Autopilot and Intune: 500+ devices, 100% compliance**, far less manual work. I cut average resolution time by **30%** by fixing the process and writing **30+ knowledge base articles**. And I was who the CEO called when a global meeting could not fail: **100% uptime**.",
    },
    {
      year: "2026 · Thirty tenants, thirty surprises",
      title: "MSP L2 across 30+ client tenants",
      body: "A short engagement doing L2 support and Microsoft 365 administration across **30+ client tenants via GDAP**: Entra ID, Exchange Online, Intune, email authentication. Thirty different environments, each with its own edge cases.",
    },
    {
      year: "2026 · The IFSC",
      title: "PC refresh in regulated finance",
      body: "I was brought into **PartnerRe**, a global reinsurance company in the Dublin IFSC, to deliver a company-wide PC refresh: **close to 100 machines across a 250-user office**, full user migrations, certified secure data sanitisation, no disruption to a regulated financial services operation. Delivered, clean close.",
    },
  ],

  es: [
    {
      year: "2016 · Villarrica, Paraguay",
      title: "La persona a la que llamabas",
      body: "Empecé como **IT Support Technician** en Electro Info, cubriendo **30+ clientes corporativos** en sitio: hardware, redes, impresoras, lo que fallara. Un pueblo chico, sin backup. Ahí aprendí que el soporte es sobre personas, no máquinas.",
    },
    {
      year: "2019 · Liderando escalaciones",
      title: "Primera vez que era mío un sistema, no solo un ticket",
      body: "Ascendí a **Technical Support Lead**, dirigiendo un equipo de **4 ingenieros** como punto de escalación para incidentes complejos y administrando Active Directory en entornos multi-dominio. La primera vez que era mío un sistema, no solo un ticket.",
    },
    {
      year: "2022 · Dublín",
      title: "Empezar de nuevo, a propósito",
      body: "Me mudé a Dublín y completé un **Higher Diploma in Computing Science en CCT College**, para reconstruir mi carrera en un nuevo mercado.",
    },
    {
      year: "2023 · El ingeniero dedicado",
      title: "Un cliente, 500+ usuarios, 8 países",
      body: "Me sumé a un MSP en Dublín, primero en el pool haciendo imaging y hardware, después asignado como ingeniero dedicado para una farmacéutica internacional. Un **equipo de dos personas**, punto de contacto principal para **500+ usuarios y 500+ endpoints en 8 países**.",
    },
    {
      year: "2023–2026 · Hacerlo bien, a escala",
      title: "Modernizar la flota, reducir el trabajo manual",
      body: "Lideré la migración completa a **Windows Autopilot e Intune: 500+ dispositivos, 100% compliance**, mucho menos trabajo manual. Bajé el tiempo medio de resolución un **30%** arreglando el proceso y escribiendo **30+ artículos de knowledge base**. Y era a quien el CEO llamaba cuando una reunión global no podía fallar: **100% de uptime**.",
    },
    {
      year: "2026 · Treinta tenants, treinta sorpresas",
      title: "L2 en 30+ tenants de clientes",
      body: "Un engagement corto haciendo soporte L2 y administración de Microsoft 365 en **30+ tenants de clientes vía GDAP**: Entra ID, Exchange Online, Intune, autenticación de email. Treinta entornos distintos, cada uno con sus propias particularidades.",
    },
    {
      year: "2026 · El IFSC",
      title: "Refresh de PC en un entorno financiero regulado",
      body: "Fui llamado a **PartnerRe**, una reaseguradora global en el IFSC de Dublín, para ejecutar un refresh de PC a nivel compañía: **cerca de 100 máquinas en una oficina de 250 usuarios**, migraciones completas de usuario, sanitización certificada de datos, sin interrumpir una operación de servicios financieros regulada. Entregado, cierre limpio.",
    },
  ],
};

// -----------------------------------------------------------
// SKILLS
// -----------------------------------------------------------
type SkillCategory = { title: string; items: string[] };

export const skills: Record<Lang, SkillCategory[]> = {
  en: [
    {
      title: "Microsoft 365 Administration",
      items: [
        "Exchange Online", "Teams", "SharePoint", "OneDrive",
        "License management",
        "SPF · DKIM · DMARC",
      ],
    },
    {
      title: "Identity & Endpoint",
      items: [
        "Entra ID (Azure AD)", "Active Directory", "MFA",
        "Conditional Access", "SSO", "Intune", "Autopilot",
        "MDM", "Endpoint compliance",
      ],
    },
    {
      title: "ITSM & MSP Tools",
      items: [
        "ServiceNow", "Cherwell", "ConnectWise", "Datto RMM",
        "ScreenConnect", "IT Glue", "GDAP multi-tenant",
      ],
    },
    {
      title: "OS & Infrastructure",
      items: [
        "Windows 10/11", "macOS",
        "DNS", "DHCP", "TCP/IP", "VPN", "PowerShell (basic)",
      ],
    },
  ],

  es: [
    {
      title: "Administración de Microsoft 365",
      items: [
        "Exchange Online", "Teams", "SharePoint", "OneDrive",
        "Gestión de licencias",
        "SPF · DKIM · DMARC",
      ],
    },
    {
      title: "Identidad y Endpoint",
      items: [
        "Entra ID (Azure AD)", "Active Directory", "MFA",
        "Conditional Access", "SSO", "Intune", "Autopilot",
        "MDM", "Compliance de endpoints",
      ],
    },
    {
      title: "ITSM y herramientas MSP",
      items: [
        "ServiceNow", "Cherwell", "ConnectWise", "Datto RMM",
        "ScreenConnect", "IT Glue", "Multi-tenant vía GDAP",
      ],
    },
    {
      title: "Sistemas operativos e infraestructura",
      items: [
        "Windows 10/11", "macOS",
        "DNS", "DHCP", "TCP/IP", "VPN", "PowerShell (básico)",
      ],
    },
  ],
};

// -----------------------------------------------------------
// CERTIFICATIONS — the ONLY three real ones. Never add more here.
// -----------------------------------------------------------
type Cert = { badge: string; name: string; issuer: string };

export const certs: Record<Lang, Cert[]> = {
  en: [
    { badge: "Certification", name: "CompTIA A+", issuer: "CompTIA" },
    { badge: "Certification", name: "ITIL v4 Foundation", issuer: "AXELOS / PeopleCert" },
    { badge: "Certification", name: "Microsoft Azure Fundamentals", issuer: "Microsoft · AZ-900" },
  ],
  es: [
    { badge: "Certificación", name: "CompTIA A+", issuer: "CompTIA" },
    { badge: "Certificación", name: "ITIL v4 Foundation", issuer: "AXELOS / PeopleCert" },
    { badge: "Certificación", name: "Microsoft Azure Fundamentals", issuer: "Microsoft · AZ-900" },
  ],
};

// -----------------------------------------------------------
// CLOSING STATEMENT — centered italic quote at the bottom
// -----------------------------------------------------------
export const closing = {
  en: "I keep people productive. From a small town in Paraguay to enterprises across 8 countries, the job has always been the same: make the technology work so the person doesn't have to think about it. I'm now looking for my next role in Dublin, in IT support, service desk or systems administration, where I can go deeper and keep raising the bar.",
  es: "Mantengo a la gente productiva. Desde un pueblo chico en Paraguay hasta empresas en 8 países, el trabajo siempre fue el mismo: que la tecnología funcione para que la persona no tenga que pensar en eso. Ahora busco mi próximo rol en Dublín, en IT support, service desk o administración de sistemas, donde pueda profundizar y seguir subiendo la vara.",
} as const;
