# Portfolio - Carlos Fernández Bou

Portfolio personal desarrollado con **Angular 17**.

## Stack
- Angular 17 (Standalone Components, sin NgModules)
- TypeScript
- CSS con variables personalizadas (dark theme)
- Google Fonts: Space Grotesk + DM Mono

## Estructura del proyecto

```
PORFOLIO/
├── src/
│   └── app/
│       ├── components/
│       │   ├── about/            # Sobre mí + stats
│       │   ├── contact/          # Contacto
│       │   ├── experience/       # Experiencia laboral (timeline)
│       │   ├── footer/           # Pie de página
│       │   ├── hero/             # Sección principal con typing effect
│       │   ├── navbar/           # Barra de navegación con scroll spy
│       │   ├── projects/         # Proyectos (CryptoBit, NorvexisGRC)
│       │   └── skills/           # Stack técnico
│       ├── app.component.css
│       ├── app.component.html
│       └── app.component.ts      # Componente raíz
│   ├── index.html
│   ├── main.ts
│   └── styles.css                # Estilos globales y variables CSS
├── angular.json
├── package.json
├── tsconfig.app.json
└── tsconfig.json
```

## Secciones

| Sección | Componente | Descripción |
|---|---|---|
| Inicio | `hero_component` | Presentación con efecto de escritura animado |
| Sobre mí | `about_component` | Perfil, formación y stats rápidos |
| Stack técnico | `skills_component` | Lenguajes, frameworks, DevOps y herramientas |
| Proyectos | `projects_component` | NorvexisGRC y CryptoBit |
| Experiencia | `experience_component` | Timeline con Centogene, Hiberus y Ayuntamiento de Catarroja |
| Contacto | `contact_component` | Email, teléfono, LinkedIn y GitHub |

## Cómo ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm start
```
El proyecto abrirá en `http://localhost:4200`

3. Build de producción:
```bash
npm run build:prod
```
Los archivos se generarán en `dist/portfolio-carlos/`

## Despliegue

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --base-href="https://carlosfernandezbou.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio-carlos/browser
```

### Vercel / Netlify
Sube la carpeta `dist/portfolio-carlos/browser` tras hacer el build de producción.

## Personalización

Para añadir proyectos, edita `src/app/components/projects/projects.component.ts` y añade un objeto al array `projects`.

Para añadir experiencia, edita `src/app/components/experience/experience.component.ts` y añade un objeto al array `items`.

Para cambiar colores, edita las variables CSS en `src/styles.css` bajo `:root`.