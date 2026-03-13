# Handoff — mi-curriculum (CV Web Jesús Díaz Martín)

## Descripción del proyecto
Portfolio/CV personal interactivo en **React 18.3.1** desplegado en GitHub Pages con dominio personalizado **www.jesusdiazmartincv.es**.
Repositorio: `c:\Users\JESUS\IdeaProjects\mi-curriculum`
Deploy: `npm run deploy` (usa gh-pages → rama `gh-pages` del repo)

## Stack
- React 18.3.1 + Create React App
- react-icons 5.3.0
- gh-pages 6.1.1
- CSS puro (un archivo por componente)
- Sin estado global (solo useState local)

## Estructura clave
```
src/
  components/       # 11 componentes funcionales
    Navbar.js / .css
    Projects.js / .css   ← componente más grande (~540 líneas)
    AboutMe, Experience, Education, Courses, CoursesFit,
    Skills, GithubSection, Contact, Footer
  assets/           # imágenes organizadas por categoría
  App.js            # ensambla todos los componentes
public/
  index.html        # HTML base, SEO, Cloudflare Analytics
```

---

## Sesión 1 — 2026-03-13

### Bugs corregidos
| Archivo | Problema | Solución |
|---------|----------|----------|
| `Projects.js:50` | `esp32` y `synergym` no estaban en el estado inicial de `useState` | Añadidos al objeto inicial |
| `Projects.js:501` | `<li></li>` y `</p>` inválidos dentro de un `<p>` (proyecto Viding) | Eliminado el `<li>` vacío, cerrado el `<p>` correctamente antes del `<ul>` |

### SEO / index.html
| Cambio | Antes | Después |
|--------|-------|---------|
| `lang` | `en` | `es` |
| `<title>` | `CvWeb JDM - ReactApp` | `Jesús Díaz Martín \| Junior Software Developer` |
| Meta description | Duplicada (líneas 9 y 15) | Una sola, más descriptiva (incluye React, Python, Spring Boot, Power BI) |

### UX / Navbar
- Texto del menú `certificados_it` → `Certificados IT`
- Añadido botón hamburguesa (`FaBars`/`FaTimes`) visible solo en móvil (≤1024px), debajo del logo
- Logo JDM oculto en móvil (la imagen incluía texto "INICIO" — es parte del PNG `logomenu.png`)
- El botón hamburguesa queda en la esquina superior izquierda como toggle del menú

### Código / Navbar.js
- Dos imports separados de `react-icons/fa` fusionados en uno

### Rendimiento / Projects.js
- `loading="lazy"` añadido a las 27 imágenes del componente

---

---

## Sesión 2 — 2026-03-13

### Objetivos UX/UI completados (todos los 8 de objetivos.md)

| # | Mejora | Archivos |
|---|--------|----------|
| 1 | Skills con chips/tags agrupados por categoría | `Skills.js`, `Skills.css` |
| 2 | Sección activa en menú lateral con IntersectionObserver | `Navbar.js`, `Navbar.css` |
| 3 | Animación fade-in/expand al abrir proyectos (CSS keyframe) | `Projects.css` |
| 4 | Botón "Volver arriba" flotante en móvil | `ScrollToTop.js` (nuevo), `ScrollToTop.css` (nuevo), `App.js` |
| 5 | Lightbox imágenes a pantalla completa (event delegation) | `Lightbox.js` (nuevo), `Lightbox.css` (nuevo), `Projects.js` |
| 6 | Botones CTA en sección Contacto (email azul + LinkedIn azul) | `Contact.js`, `Contact.css` |
| 7 | Hash de URL actualizado al hacer scroll (`window.history.replaceState`) | `Navbar.js` |
| 8 | Mensaje `<noscript>` en español | `public/index.html` |

### Mejoras de diseño adicionales (glassmorphism)
- Header, footer y menú lateral: `background-image` sólida → `rgba(10,12,20,0.55)` + `backdrop-filter: blur(12px)`
- Borde sutil `rgba(97,218,251,0.12)` en header/footer/menú
- Hover y estado activo del menú: fondos sólidos → `rgba` transparentes
- Tarjetas de todas las secciones (9 archivos CSS): `background-color: #2c2c2c` → `rgba(10,12,20,0.6)` + `backdrop-filter: blur(10px)`

### Nuevos archivos creados
- `src/components/ScrollToTop.js` + `ScrollToTop.css`
- `src/components/Lightbox.js` + `Lightbox.css`

---

## Pendiente / Ideas futuras
- [ ] Refactorizar `Projects.js` (~540 líneas) extrayendo cada empresa a su propio subcomponente
- [ ] Unificar el patrón de toggle: `<span onClick>` → `<button>` para accesibilidad
- [ ] Typo en JSX: "Net Promotore Score" → "Net Promoter Score"
- [ ] Considerar migrar de Create React App (no mantenido) a Vite en el futuro

---

## Comandos útiles
```bash
# Desarrollo local
npm start          # → http://localhost:3000

# Producción
npm run build      # genera /build
npm run deploy     # build + sube a gh-pages → www.jesusdiazmartincv.es
```
