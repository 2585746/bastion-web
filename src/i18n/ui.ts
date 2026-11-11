export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.bastion': 'Bastión',
    'nav.incidents': 'Incidencias',
    'nav.blog': 'Blog',
    'nav.about': 'Sobre mí',
    'nav.menu': 'Menú',
    'nav.skip': 'Saltar al contenido',
    'footer.static': 'Sitio estático, sin cookies ni rastreadores.',
    'lang.switch': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.bastion': 'Bastion',
    'nav.incidents': 'Incidents',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'footer.static': 'Static site, no cookies or trackers.',
    'lang.switch': 'Español',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
