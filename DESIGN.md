---
name: Bastión
description: Tema oscuro técnico con un único acento rojo, tarjetas de cristal oscuro y rótulos en mayúsculas espaciadas.
colors:
  bg: "#141414"
  bg-alt: "#1a1a1a"
  surface: "#1f1f1f"
  border: "#2a2a2a"
  red: "#e02b2f"
  red-dark: "#b81f23"
  red-text: "#ff4a4e"
  text: "#ffffff"
  text-muted: "#b5b5b5"
  icon-neutral: "#6b6b6b"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: "2px"
  mono:
    fontFamily: "ui-monospace, 'Cascadia Code', Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "2px"
spacing:
  s-1: "0.5rem"
  s-2: "1rem"
  s-3: "1.5rem"
  s-4: "2.5rem"
  s-5: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.red-dark}"
    textColor: "{colors.text}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.75rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "2rem"
  chip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.15rem 0.65rem"
---

# Design System: Bastión

## Overview

**Creative North Star: "El Cuaderno del Centro de Operaciones"**

La web se lee como un cuaderno de guardia de un centro de operaciones de noche: fondo casi negro, texto atenuado y un único rojo que señala lo que importa. La tipografía y la estructura llevan el peso; la decoración es luz, no adorno. Es un sistema técnico y seguro: rótulos pequeños en mayúsculas espaciadas, marcadores cuadrados rojos y esquinas casi rectas.

Las tarjetas son cristal oscuro: borde de degradado fino, brillo rojo que sigue al cursor y un leve ascenso al enlazarlas. El resto del sistema es plano; las capas de gris separan, y los resplandores rojos son de muy baja opacidad.

**Key Characteristics:**
- Tema oscuro con un único acento rojo (#e02b2f); nada de segundo color.
- Poppins autoalojada, titulares en 800 con tracking negativo, rótulos en mayúsculas.
- Esquinas de 2px en todo; sin redondeo decorativo.
- Cristal oscuro solo en tarjetas; luz roja tenue como único efecto.
- El movimiento es CSS puro y respeta `prefers-reduced-motion`.

## Colors

Un negro cálido en tres capas de gris con un solo rojo de señal y tres rojos de apoyo.

### Primary
- **Rojo de Señal** (#e02b2f): fondos de botón, cifras grandes, marcadores cuadrados de listas y el borde superior que crece en las tarjetas.
- **Rojo Oscuro de Pulsación** (#b81f23): solo el hover del botón primario.
- **Rojo de Texto** (#ff4a4e): texto rojo pequeño (enlaces, eyebrow, CTA, foco). Más claro que el de señal para cumplir contraste AA sobre el fondo oscuro.

### Neutral
- **Negro de Guardia** (#141414): fondo de página y de chips.
- **Negro Alterno** (#1a1a1a): secciones alternas.
- **Grafito de Superficie** (#1f1f1f): superficie de tarjetas y de `code`.
- **Línea de Grafito** (#2a2a2a): bordes y divisores.
- **Blanco** (#ffffff): titulares y texto sobre rojo.
- **Gris de Lectura** (#b5b5b5): texto de cuerpo.
- **Gris de Icono** (#6b6b6b): iconos neutros.

### Named Rules
**The One Voice Rule.** El rojo es la única voz de color. No se añade un segundo acento ni se usa el rojo como relleno de grandes superficies salvo la tarjeta destacada.

**The Small Red Rule.** El texto rojo pequeño usa siempre `#ff4a4e`; `#e02b2f` queda para fondos y cifras grandes.

## Typography

**Display Font:** Poppins (con system-ui, -apple-system, 'Segoe UI')
**Body Font:** Poppins (misma familia)
**Label/Mono Font:** ui-monospace, 'Cascadia Code', Consolas para `code`

**Character:** Una sola familia geométrica; la jerarquía sale del peso y del tamaño, no de combinar fuentes.

### Hierarchy
- **Display** (800, clamp(2.5rem, 7vw, 4.5rem), 1.05): h1 de cabecera, tracking -0.025em.
- **Headline** (800, clamp(2rem, 5vw, 3.25rem), 1.08): h2 de sección.
- **Title** (700, 1.125rem, 1.15): h3 de tarjetas.
- **Body** (400, 0.9375rem, 1.8): texto corrido en gris de lectura; el `lead` llega a 40rem.
- **Label** (700, 0.75rem, 2px, mayúsculas): eyebrow, botones, CTA y chips.

### Named Rules
**The Caps Label Rule.** Todo rótulo de interfaz (eyebrow, botón, CTA) va en mayúsculas de 12px con 2px de tracking; los titulares nunca.

## Layout

Contenedor de 72rem centrado con gutter fluido `clamp(1.25rem, 4vw, 2.5rem)`. Las secciones separan con `clamp(4rem, 9vw, 7.5rem)` y alternan fondo `bg` y `bg-alt`. Las cuadrículas usan `auto-fit` con mínimo de 16rem y 1.25rem de hueco. Escala de espacio: 0.5, 1, 1.5, 2.5 y 4rem. Entre secciones hay una línea de luz roja que se desvanece por los extremos. Los elementos entran con un revelado escalonado en CSS cuando el navegador lo admite.

## Elevation & Depth

Híbrido controlado: en reposo, la profundidad son capas de gris (`bg`, `bg-alt`, `surface`) sin sombras negras. Las tarjetas son cristal oscuro: fondo casi opaco con borde degradado y un brillo rojo radial que sigue al cursor. Las tarjetas enlazadas suben 4px al pasar el cursor o al enfocar.

### Shadow Vocabulary
- **Brillo de Progreso** (`box-shadow: 0 0 12px rgb(224 43 47 / 0.18)`): solo la barra de progreso de lectura.

### Named Rules
**The Glass-Only-On-Cards Rule.** El cristal (borde degradado, brillo del cursor, ascenso) es exclusivo de las tarjetas. Ningún otro elemento lo imita.

## Shapes

Esquinas de 2px en botones, tarjetas, chips, `code` y foco. Bordes de 1px en `#2a2a2a`; el contorno de foco es de 2px en rojo con 3px de separación. Los marcadores de lista son cuadrados rojos de 0.4rem.

## Components

### Buttons
- **Shape:** esquina de 2px, relleno 1rem × 1.75rem (pequeño 0.7rem × 1rem).
- **Primary:** fondo #e02b2f, texto blanco, rótulo en mayúsculas de 12px con 2.5px de tracking.
- **Hover / Focus:** el primario baja a #b81f23; el fantasma pasa a borde #b5b5b5. Transición de 0.3s.
- **Ghost:** transparente, borde 1px #2a2a2a, texto blanco.

### Chips
- **Style:** fondo #141414, borde 1px #2a2a2a, texto #b5b5b5, 12px, sin salto de línea.

### Cards / Containers
- **Corner Style:** 2px.
- **Background:** degradado de #1f1f1f a #181818 con borde de degradado blanco-rojo-blanco.
- **Shadow Strategy:** cristal oscuro; ver Elevation & Depth.
- **Border:** 1px degradado fino que carga un matiz rojo.
- **Internal Padding:** 2rem.
- **Featured:** fondo de degradado rojo (#d4202b a #a3121c), texto y marcadores blancos.

### Navigation
Enlaces en rojo de texto con subrayado solo dentro de párrafos. Hay una barra de progreso de lectura de 3px en rojo y un enlace de salto al contenido.

### Entrada de guardia (signature)
Registro con fecha que resume el estado verificable del proyecto. Fondo #1a1a1a, borde de 1px #2a2a2a con borde superior rojo de 2px y esquinas de 2px. Cabecera en rótulo de mayúsculas con la fecha en monoespaciado rojo. Filas `dt`/`dd` separadas por líneas de 1px; los valores van en monoespaciado con cifras tabulares porque son datos. Las cifras salen de los datos (`facts` e `incidencias.json`), nunca escritas a mano.

### Terminal (signature)
Bloque que imita una consola con líneas de comando marcadas, usado para mostrar procedimientos. Mantiene la misma paleta y esquinas de 2px.

## Do's and Don'ts

### Do:
- **Do** usar el rojo solo como señal; texto rojo pequeño en #ff4a4e.
- **Do** mantener las esquinas en 2px y los bordes en 1px.
- **Do** poner rótulos en mayúsculas de 12px con tracking de 2px.
- **Do** respetar `prefers-reduced-motion` en toda animación.

### Don't:
- **Don't** añadir sombras negras ni elevaciones fuera de las tarjetas.
- **Don't** introducir un segundo color de acento.
- **Don't** usar recursos de terceros: la fuente es autoalojada y el grano es un SVG inline.
- **Don't** redondear esquinas más de 2px.
