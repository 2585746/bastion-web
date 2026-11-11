// @ts-check
import { defineConfig } from 'astro/config';

/**
 * ÚNICA variable para cambiar de alojamiento.
 * - GitHub Pages (ahora):   SITE_URL = 'https://2585746.github.io/bastion-web'
 * - Dominio propio (luego): SITE_URL = 'https://tudominio.com'
 * El "base" se deduce solo de la ruta de la URL.
 */
const SITE_URL = 'https://2585746.github.io/bastion-web';

const url = new URL(SITE_URL);

export default defineConfig({
  site: url.origin,
  base: url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, ''),
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
