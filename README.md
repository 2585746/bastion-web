# bastion-web

Portafolio y bitácora de **Bastión**, mi laboratorio de infraestructura y seguridad.
Sitio estático con [Astro](https://astro.build), sin cookies ni rastreadores.

## Desarrollo

```
npm install
npm run dev      # http://localhost:4321/bastion-web/
npm run build    # comprueba tipos y genera dist/
```

## Cambiar al dominio propio

Edita **una sola variable**, `SITE_URL`, en `astro.config.mjs`:

```js
const SITE_URL = 'https://tudominio.com';
```

`site` y `base` se calculan solos. La carpeta `dist/` se puede copiar tal cual a cualquier servidor estático.

## Guía de estilo

Todos los componentes están en `/estilo` (no se indexa).

> En construcción: el README completo (añadir incidencias, artículos y actualizar la hoja de ruta) llega en la fase 6.
