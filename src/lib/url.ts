import type { Lang } from '../i18n/ui';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta interna respetando el "base" del sitio. href('/bastion') -> '/bastion-web/bastion' */
export function href(path: string, lang: Lang = 'es'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const prefix = lang === 'en' ? '/en' : '';
  const full = `${prefix}${clean === '/' && prefix ? '' : clean}`;
  return `${BASE}${full || '/'}`;
}

/** Ruta de un recurso en /public. */
export function asset(path: string): string {
  return `${BASE}/${path.replace(/^\//, '')}`;
}

/** Datos públicos del autor (solo lo autorizado). */
export const PROFILE = {
  name: 'Martín De Prada',
  email: 'martin.deprada16@gmail.com',
  github: 'https://github.com/2585746',
  linkedin:
    'https://www.linkedin.com/in/mart%C3%ADn-daniel-de-prada-flor-2a218a406',
} as const;
