---
name: Bastión
description: Tema oscuro de precisión con superficies casi negras, texto blanco papel, líneas finas en lugar de sombras y un único acento lima para la acción principal.
colors:
  void: "#08090a"
  carbon: "#0f1011"
  obsidian: "#161718"
  graphite: "#23252a"
  smoke: "#383b3f"
  ash: "#62666d"
  fog: "#8a8f98"
  mist: "#d0d6e0"
  bone: "#e5e5e6"
  paper: "#ffffff"
  acid-lime: "#e4f222"
  pulse-green: "#27a644"
  coral-red: "#eb5757"
typography:
  display:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 4.5rem)"
    fontWeight: 510
    lineHeight: 1
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 510
    lineHeight: 1.05
    letterSpacing: "-0.022em"
  subheading:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "-0.012em"
  title:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 590
    lineHeight: 1.4
    letterSpacing: "-0.011em"
  body:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label:
    fontFamily: "'Inter Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 510
    lineHeight: 1.4
    letterSpacing: "-0.011em"
  mono:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.013em"
rounded:
  sm: "2px"
  badge: "4px"
  md: "6px"
  xl: "12px"
  full: "9999px"
spacing:
  base: "4px"
  element-gap: "8px"
  card-padding: "24px"
  section-gap: "96px"
  page-max-width: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.acid-lime}"
    textColor: "{colors.void}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    border: "1px {colors.graphite}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-neutral:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.void}"
    rounded: "{rounded.full}"
    padding: "7px 12px"
  card:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.mist}"
    border: "inset 1px {colors.graphite}"
    rounded: "{rounded.xl}"
    padding: "24px"
  badge:
    backgroundColor: "rgb(255 255 255 / 0.05)"
    textColor: "{colors.fog}"
    rounded: "{rounded.badge}"
    padding: "2px 6px"
  pill:
    backgroundColor: "rgb(255 255 255 / 0.05)"
    textColor: "{colors.mist}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Bastión

## Overview

**Creative North Star: "Instrumento de precisión de medianoche"**

La web se lee como un instrumento de medida en una sala a oscuras: lienzo casi negro, texto blanco papel con tracking cerrado y nada que no aporte información. La única textura visual son las propias piezas de interfaz (tarjetas, registros, terminal), enmarcadas con líneas de 1 px. Hay un solo color de acción, el lima, y aparece una vez por vista.

Sustituye al tema anterior (Poppins y rojo `#e02b2f`). La estructura y el contenido de las páginas no cambian; cambia solo el sistema visual.

**Key Characteristics:**
- Lienzo `#08090a` y superficies en cuatro niveles (void, carbon, obsidian, slate).
- Inter Variable autoalojada con `cv01`, `ss03` y `zero`; pesos 400, 510 y 590 como máximo.
- JetBrains Mono autoalojada (sustituto de Berkeley Mono) solo para IDs, fechas, cifras de registro y metadatos.
- Líneas finas e inset en lugar de sombras; radios de 12 px en tarjetas, 6 px en botones, 4 px en badges.
- Lima `#e4f222` solo en el botón principal y en el indicador de pestaña activa.
- Verde y coral solo como etiquetas de estado, nunca como acciones.
- Movimiento mínimo en CSS que respeta `prefers-reduced-motion`.

## Colors

### Neutros
- **Void** (#08090a): lienzo de la página.
- **Carbon** (#0f1011): tarjetas, terminal, entrada de guardia.
- **Obsidian** (#161718): superficies elevadas, hover de tarjetas enlazadas, desplegables.
- **Graphite** (#23252a): bordes, divisores, contorno del botón fantasma.
- **Smoke** (#383b3f): líneas de más contraste (hover, destacadas).
- **Ash** (#62666d): solo trazos e iconos inactivos; no llega a 4,5:1, así que nunca va en texto importante.
- **Fog** (#8a8f98): texto terciario, rótulos y metadatos (≈6:1 sobre void).
- **Mist** (#d0d6e0): texto de cuerpo (>14:1 sobre void).
- **Bone** (#e5e5e6): rellenos casi blancos (filtro activo, icono de tarjeta destacada, logo).
- **Paper** (#ffffff): titulares y texto de máximo contraste.

### Acento y estados
- **Acid lime** (#e4f222): botón principal (texto #08090a) e indicador de pestaña activa en Bastión. Es el único color de acción.
- **Pulse green** (#27a644): estado correcto o hecho (badges de fase, marcas de la hoja de ruta, líneas `ok` de la terminal).
- **Coral red** (#eb5757): estado de fallo o aviso (`.chip--bad`).

### Named Rules
**The One Lime Rule.** Un solo botón lima por vista. Las acciones secundarias son fantasma, pastilla neutra o enlace de texto.

**The Status-Not-Action Rule.** Verde y coral marcan estados; nunca se usan para botones ni enlaces.

**The No Chromatic Body Rule.** El texto corrido va en mist, fog o paper; nunca en color.

## Typography

**Sans:** Inter Variable (`@fontsource-variable/inter`), con `font-feature-settings: "cv01" on, "ss03" on, "zero" on`.
**Mono:** JetBrains Mono Variable (`@fontsource-variable/jetbrains-mono`).

Ambas se sirven desde el propio sitio; no hay peticiones a terceros.

### Hierarchy
- **Display** (510, hasta 72 px, lh 1, −0,022em): h1 del hero.
- **Headline** (510, hasta 48 px, lh 1,05, −0,022em): h1 de página y h2 de sección.
- **Subheading** (400, 24 px, −0,012em): títulos de bloque y de regla.
- **Title** (590, 17 px): títulos de tarjeta.
- **Body** (400, 16 px, lh 1,5); **body small** (15 px, −0,011em) dentro de tarjetas.
- **Label** (510, 13 px): rótulos, botones pequeños, pestañas.
- **Mono** (400, 12–13 px, −0,013em): fechas, IDs, contadores, numeración de sección.

### Named Rules
**The Two-Tone Headline Rule.** En `SectionHeader`, las palabras entre asteriscos van en paper y el resto del titular en fog.

**The Mono-Is-Data Rule.** JetBrains Mono nunca en titulares ni texto de marketing.

**The 590 Cap.** Ningún peso supera 590.

## Layout

Contenedor de 1200 px más gutter (`clamp(1rem, 4vw, 2.5rem)`, 16 px en móvil). Secciones separadas 96 px en escritorio (`clamp(4rem, 10vw, 6rem)`) con una línea de 1 px graphite entre ellas; sin fondos alternos. Base de 4 px; huecos de 8, 12, 24 y 96 px. Las cuadrículas de tarjetas tienen una columna en móvil y dos desde 44 rem: nunca tres. El hero es un titular grande alineado a la izquierda con el retrato enmarcado a la derecha.

## Elevation & Depth

La profundidad la dan los niveles de superficie y las líneas interiores:
- **Subtle** (`inset 0 0 0 1px #23252a`): borde de tarjetas y marcos.
- **Strong** (`inset 0 0 0 1px #383b3f`): hover y tarjeta destacada.
- **Button** (pila tenue de sombras de 1–5 px): solo el botón lima.
- **XL** (`0 4px 32px rgb(8 9 10 / 0.6)`): solo el desplegable de idioma, que flota sobre el contenido.

No hay sombras para separar tarjetas del lienzo, ni brillos, ni degradados decorativos. El suelo de degradado del hero que permite la guía no se usa: no encaja con un retrato.

## Shapes

12 px en tarjetas (nunca más), 6 px en botones, campos y desplegables, 4 px en badges, 2 px en marcas pequeñas, 9999 px en pastillas. Foco: contorno de 2 px en mist con 2 px de separación.

## Components

### Buttons
- **Primary:** lima, texto void, 14 px a 510, radio 6 px, relleno 10 × 16 px. Uno por vista.
- **Ghost:** transparente, contorno graphite, texto mist; en hover, fondo tenue y contorno smoke.
- **Neutral:** pastilla blanca con texto void; la llamada «Bastión» de la barra de navegación.

### Enlaces
- **ActionLink:** 14 px a 510 en mist con flecha en fog; en hover, paper y subrayado fino.
- **En párrafos:** paper con subrayado smoke de 1 px.

### Badges y pastillas
- **Badge (`.chip`):** fondo `rgb(255 255 255 / 0.05)`, texto fog de 12 px, radio 4 px. Variantes `.chip--ok` y `.chip--bad`.
- **Pastilla:** filtros de incidencias y menú de anclas; radio completo. El filtro activo pasa a bone con texto void.

### Cards
Fondo carbon, línea interior graphite, radio 12 px, relleno 24 px. Icono gris de 20 px en un recuadro de 36 px. Enlazada: en hover sube a obsidian con línea smoke, sin desplazamiento. Destacada: obsidian con línea smoke e icono sobre bone.

### Navegación
Barra fija arriba, translúcida sobre void con desenfoque y línea inferior graphite: logo a la izquierda, enlaces de 13 px en mist a la derecha, la página actual con fondo tenue. En Bastión, las pestañas llevan el indicador lima de 2 px bajo la activa.

### Entrada de guardia (signature)
Tarjeta carbon con cabecera en paper y fecha en mono fog. Filas `dt`/`dd` separadas por líneas graphite; los valores en mono paper con cifras tabulares. Las cifras salen de `facts` e `incidencias.json`, nunca a mano.

### Terminal (signature)
Marco carbon de radio 12 px con barra de tres puntos grafito y cuerpo en JetBrains Mono de 13 px. Las líneas `ok` en verde de estado.

### Hoja de ruta
Fases separadas por líneas; ID y recuento en mono; estado como badge (verde si está hecha, contorno smoke si está en curso). Marcas de tarea: verde lleno (hecha), medio verde (en curso), contorno fog (pendiente), aspa ash con tachado (descartada).

## Do's and Don'ts

### Do:
- **Do** usar Inter con `cv01`, `ss03` y `zero`, y cuerpo de 16 px a 400.
- **Do** reservar el lima para una sola acción principal por vista.
- **Do** separar con líneas de 1 px (graphite o smoke) e inset, no con sombras.
- **Do** respetar `prefers-reduced-motion` en toda animación.

### Don't:
- **Don't** usar pesos de 700 o más.
- **Don't** poner degradados en botones, tarjetas o texto.
- **Don't** añadir otro color de acción, ni usar verde o coral como botones.
- **Don't** redondear tarjetas más de 12 px ni hacer cuadrículas de tres columnas.
- **Don't** usar #62666d para texto importante.
- **Don't** pedir fuentes ni recursos a terceros en tiempo de ejecución.
