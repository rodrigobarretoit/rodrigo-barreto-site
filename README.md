# Rodrigo Barreto — sitio profesional

Sitio en dos páginas (Perfil + Pruebas), bilingüe EN/ES, hecho con [Astro](https://astro.build).
Pensado para que un recruiter o cliente potencial vea el perfil, la trayectoria y las pruebas
en un solo lugar y contacte.

- **Home (EN):** `/`
- **Proof (EN):** `/proof`
- **Perfil (ES):** `/es/`
- **Pruebas (ES):** `/es/proof`

---

## Ver el sitio en tu máquina

Requisito único: tener **Node.js 20+** instalado (una vez, ya está hecho).

Abrí una terminal en la carpeta del proyecto y corré:

```bash
npm run dev
```

Astro te va a mostrar una URL tipo `http://localhost:4321`. Abrila en el navegador.
Mientras el comando está corriendo, **cualquier cambio que hagas en un archivo
se refleja al instante en el navegador**. Cuando terminás, cerrá la terminal
con `Ctrl + C`.

---

## Cómo editar contenido (sin tocar código)

Todo lo que se edita seguido está en dos lugares:

### 1) Textos del perfil (Hero, Timeline, Skills, Certifications, Closing)

Archivo: `src/data/content.ts`

Está comentado en español, dividido por sección. Cada bloque tiene un `en:` (inglés) y
un `es:` (español). Cambiás el texto y guardás.

**Timeline — para poner una palabra en negrita** dentro del párrafo, envolvela en
`**dos asteriscos**`. Ejemplo:

```ts
body: "Lideré la migración de **500+ dispositivos** ...",
```

**Timeline — para agregar un nuevo hito**: copiá cualquier item completo dentro del array
(desde `{` hasta `},`), pegalo debajo, y editá `year`, `title`, `body`. Hacelo tanto en el
bloque `en:` como en el `es:`.

### 2) Textos cortos de UI (nav, botones, labels)

Archivo: `src/data/ui.ts`. Igual estructura: dos objetos `en:` y `es:` con los mismos
keys. Cambiá el valor, no el key.

### 3) Datos personales (email, LinkedIn, CV)

Archivo: `src/data/site.ts`. Tu email, tu LinkedIn, la ruta del CV, y el dominio.

### 4) Agregar una nueva tarjeta en Proof

Cada tarjeta es un archivo Markdown en `src/content/proof/`.

**Para agregar una nueva tarjeta:**

1. Andá a `src/content/proof/en/`
2. Copiá cualquier archivo `.md` existente (por ejemplo `kb-onboarding.md`)
3. Renombralo (nombre en minúsculas con guiones, ej. `mi-nuevo-proyecto.md`)
4. Abrilo y editá los campos de arriba (entre los dos `---`) y el texto de abajo.

Los campos son:

| Campo | Qué es |
|---|---|
| `type` | Categoría. Debe ser uno de: `kb`, `labs`, `video`, `community` |
| `title` | Título de la tarjeta |
| `summary` | Resumen de 40–90 palabras, primera persona |
| `date` | Fecha o etapa, formato libre (`"2024"`, `"August 2026"`, `"Ongoing"`) |
| `tags` | Etiquetas cortas entre corchetes: `["Intune", "MDM"]` |
| `links` | (Opcional) Links de salida. Ver ejemplos existentes. |
| `order` | Número. Menor = aparece más arriba. Podés usar 10, 20, 30… |
| `draft` | `true` = tarjeta oculta (no aparece en el sitio). `false` = visible. |

5. **Importante**: repetí lo mismo en `src/content/proof/es/` para tener la versión en español.
   El archivo tiene que tener el **mismo nombre** que el inglés.

Astro va a validar los campos al guardar. Si te olvidás uno, el navegador te muestra el error
con línea y campo — no rompés nada.

### 5) Subir tu CV

Poné el PDF en `public/cv/Rodrigo-Barreto-CV.pdf`.
La ruta que usa el botón "Download CV" es esa. Si querés otra ruta, cambiala en
`src/data/site.ts` → `cvPath`.

### 6) Subir PDFs de runbooks u otros documentos

Poné los PDFs en `public/docs/`.
Después, en cualquier tarjeta de Proof, en el campo `links:`, apuntá al archivo:

```yaml
links:
  - label: "PDF"
    href: "/docs/mi-runbook.pdf"
```

### 7) Poner tu foto en el hero

1. Guardá la foto (JPG o WebP, formato vertical 3:4) en `public/img/rodrigo-portrait.jpg`
2. Abrí `src/components/Hero.astro`
3. Descomentá la línea del `<img>` y borrá el `<span class="hero__portrait-initials">`

---

## Publicar el sitio

### Opción A — Netlify (drag & drop, la más simple)

1. Ejecutá el build: `npm run build`
   - Astro genera la carpeta `dist/` con todo el sitio compilado.
2. Andá a [app.netlify.com/drop](https://app.netlify.com/drop) e **arrastrá la carpeta `dist/`**.
3. Netlify te da una URL tipo `random-word-1234.netlify.app`. Ya está publicado.

Para actualizaciones futuras: cambiás algo, corrés `npm run build`, y arrastrás la nueva
`dist/` al mismo lugar (o conectás Netlify a un repo GitHub para que buildeá solo).

### Opción B — Netlify con GitHub (recomendado a mediano plazo)

Con esto, cada vez que hacés `git push`, Netlify buildea y publica solo.

1. Creá un repo en GitHub y subí este proyecto (podemos hacerlo juntos si querés).
2. En Netlify: "Add new site → Import from Git → GitHub → seleccioná el repo".
3. Netlify detecta Astro y usa la config correcta automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

### Opción C — GitHub Pages

Requiere un paso extra de config en `astro.config.mjs` (`base` y `site`).
Preferible Netlify. Si querés Pages igual, avisá y lo configuro.

### Conectar un dominio propio

Cuando compres un dominio (ej. `rodrigobarreto.com`):

1. **En `src/data/site.ts`**: cambiá `domain: "rodrigobarreto.example"` por tu dominio real.
2. **En `astro.config.mjs`**: cambiá la propiedad `site: "https://rodrigobarreto.example"`
   por `https://tudominio.com`.
3. **En Netlify**: Site settings → Domain management → Add custom domain → seguí las
   instrucciones (te va a pedir configurar registros DNS en el registrador donde
   compraste el dominio).
4. Correr `npm run build` y republicar.

---

## Estructura de carpetas

```
rodrigo-site/
├── public/                     ← Archivos servidos tal cual (no se compilan)
│   ├── cv/                       ← Tu CV en PDF va acá
│   ├── docs/                     ← Runbooks / PDFs de proof cards
│   ├── img/                      ← Fotos (portrait, etc.)
│   ├── scripts/main.js           ← JS interactivo (theme, filtros, reveals)
│   ├── favicon.svg
│   └── og-image.svg              ← Preview al compartir en LinkedIn
│
├── src/
│   ├── content/proof/            ← TARJETAS DE PROOF EN MARKDOWN
│   │   ├── en/*.md                 (versión inglés)
│   │   ├── es/*.md                 (versión español)
│   │   └── config.ts               (schema — no lo toques)
│   │
│   ├── data/                     ← DATOS EDITABLES DEL PERFIL
│   │   ├── site.ts                 (nombre, email, LinkedIn)
│   │   ├── ui.ts                   (textos cortos de nav/botones)
│   │   └── content.ts              (hero, timeline, skills, certs, closing)
│   │
│   ├── components/               ← Piezas visuales (Nav, Hero, Timeline…)
│   ├── layouts/BaseLayout.astro  ← <head>, SEO, tema, i18n
│   ├── pages/
│   │   ├── index.astro             (/) — Perfil EN
│   │   ├── proof.astro             (/proof) — Proof EN
│   │   └── es/
│   │       ├── index.astro         (/es/) — Perfil ES
│   │       └── proof.astro         (/es/proof) — Proof ES
│   └── styles/global.css         ← Estilos globales, paleta, dark/light
│
├── astro.config.mjs              ← Config del sitio + i18n
├── package.json                  ← Deps y scripts (npm run dev/build)
└── README.md                     ← Este archivo
```

---

## Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el sitio local en `http://localhost:4321` con hot-reload |
| `npm run build` | Genera la carpeta `dist/` lista para publicar |
| `npm run preview` | Sirve la `dist/` compilada, para verla como en producción |

---

## Notas de diseño

- **Paleta**: azul marino oscuro (`--navy-*`) + acento ámbar/dorado (`--amber-*`),
  alineada con el banner de LinkedIn.
- **Tipografía**: Inter (sans, para body/nav) + Fraunces (serif, para títulos).
- **Modo claro/oscuro**: por defecto oscuro; el visitante puede cambiar con el ícono ☀️
  arriba a la derecha y la preferencia se guarda.
- **Idioma**: por defecto inglés; si el visitante toca ES, la elección se guarda
  y las próximas visitas van directo a `/es/`.
- **Sin datos sensibles**: el sitio no expone teléfono ni dirección personal.
- **Certificaciones**: solo las tres reales (A+, ITIL v4, AZ-900). MD-102 aparece
  como "currently studying", separado, nunca como conseguida.

---

## Si algo se rompe

- Cambiaste algo en un `.md` y no aparece la tarjeta: revisá que `draft: false` y que
  todos los campos obligatorios estén.
- El navegador muestra un error rojo: leelo, dice archivo y línea. Casi siempre es
  un YAML mal formateado (una comilla faltante, un `:` de más).
- Cambiaste el idioma con el toggle y quedó "pegado" en ES: abrí la consola del
  navegador (F12) y corré `localStorage.removeItem("rb-lang")`, después recargá.
