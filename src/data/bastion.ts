import type { IconName } from '../components/Icon.astro';

export interface Layer {
  id: string;
  icon: IconName;
  title: string;
  /** Resultado en una línea y en lenguaje llano; es lo que se lee de un vistazo. */
  summary: string;
  /** Detalle técnico: va plegado y define las siglas la primera vez que aparecen. */
  text: string;
  featured?: boolean;
}

/**
 * Datos que cambian con el tiempo, en un solo sitio. Al actualizar cualquiera, cambia también `asOf`:
 * la página muestra esa fecha como «datos a fecha de».
 */
export const facts = {
  asOf: '2026-11-16',
  proxmox: '9.2',
  monitores: 9,
} as const;

/** Capas del proyecto. Sin direcciones ni nombres internos de equipos. La destacada va primera. */
export const layers: Layer[] = [
  {
    id: 'automatizacion',
    icon: 'bot',
    title: 'Automatización e IA',
    featured: true,
    summary: 'Un informe semanal con IA y un agente por chat que consulta el estado, pero no cambia nada.',
    text: 'n8n (automatización de flujos) y la API de Gemini generan un informe semanal con datos de Uptime Kuma, Glances y Proxmox, leídos con un token de solo lectura. El primero detectó por su cuenta una copia que decía «éxito» y guardaba una de tres máquinas. Además hay un agente por chat que consulta el estado y se niega a ejecutar cambios.',
  },
  {
    id: 'hipervisor',
    icon: 'server',
    title: 'Hipervisor',
    summary: 'La base: un servidor propio con sus máquinas y contenedores, probado antes de guardar datos.',
    text: `Proxmox VE ${facts.proxmox} en UEFI con contenedores LXC (entornos ligeros que comparten el núcleo) sin privilegios y máquinas virtuales KVM (equipos completos con su propio núcleo). Cuentas separadas, una para el día a día y otra solo para emergencias, ambas con 2FA (segundo factor de acceso). Validé el hardware con Memtest86+ (prueba de la memoria) y SMART (autodiagnóstico de los discos) antes de confiarle datos.`,
  },
  {
    id: 'red',
    icon: 'network',
    title: 'Red y acceso',
    summary: 'Acceso desde el móvil a todo lo de casa sin abrir ningún puerto al exterior.',
    text: 'Tailscale como router de subred (la puerta de entrada a la red de casa): desde el móvil llego a cualquier equipo de casa sin abrir ni un puerto en el router. El anfitrión no usa el DNS de la red privada, para no depender de algo que él mismo aloja.',
  },
  {
    id: 'dns',
    icon: 'dns',
    title: 'DNS',
    summary: 'Un DNS propio que bloquea unos 303 000 dominios y da nombre a los servicios locales.',
    text: 'Pi-hole v6 (bloqueador de dominios publicitarios y de rastreo) en un contenedor sin privilegios, solo para los dispositivos de la red privada. Bloquea unos 303 000 dominios y resuelve nombres locales que apuntan al proxy inverso (el que reparte las peticiones a cada servicio).',
  },
  {
    id: 'monitorizacion',
    icon: 'pulse',
    title: 'Monitorización y alertas',
    summary: `${facts.monitores} monitores y un aviso externo: si cae el servidor, la luz o internet, la alerta llega al móvil.`,
    text: `Uptime Kuma con ${facts.monitores} monitores activos, Glances para los sensores del hardware y un latido cada 5 minutos a Healthchecks.io: si cae el servidor, la luz o internet, avisa un servicio que no vive dentro de lo que vigila. Todo llega al móvil por ntfy y cada vía se probó con un fallo real.`,
  },
  {
    id: 'copias',
    icon: 'backup',
    title: 'Copias de seguridad',
    summary: 'Copias diarias de todas las máquinas, restauradas de verdad para comprobar que sirven.',
    text: 'Copia diaria de todas las máquinas en modo snapshot con compresión ZSTD (rápida y eficiente). Restauré una VM con base de datos, aislada de la red, y comparé el número de tablas antes y después. La copia cifrada con rclone (herramienta de copia a la nube) a Google Drive completa la regla 3-2-1 (tres copias, en dos soportes distintos, una fuera de casa).',
  },
  {
    id: 'docker',
    icon: 'container',
    title: 'Plataforma Docker',
    summary: 'Los servicios corren en una máquina virtual endurecida, con acceso solo por clave.',
    text: 'VM Debian 13 endurecida: SSH solo con clave Ed25519 (un tipo moderno de clave), sin acceso de root, verificado con sshd -T (muestra la configuración real del servicio SSH). Un proyecto Compose por servicio, secretos con permisos 600 y bases de datos con versión fijada y sin puertos publicados. Ejecuta Nginx Proxy Manager, Homepage y n8n.',
  },
];

export interface Decision {
  what: string;
  why: string;
}

export const decisions: Decision[] = [
  {
    what: 'Ningún puerto abierto en el router de casa',
    why: 'El acceso remoto va solo por Tailscale, así que nada de casa queda expuesto a internet. Lo que deba ser público va a la nube.',
  },
  {
    what: 'El vigilante no vive dentro de lo que vigila',
    why: 'Si cae el servidor, la luz o internet, el aviso lo da Healthchecks.io, un servicio externo. Una alerta que depende de la máquina caída no avisa.',
  },
  {
    what: 'La infraestructura base no depende de lo que aloja',
    why: 'El hipervisor usa un DNS público, no el Pi-hole que corre en él. Lo aprendí en una incidencia: sin Pi-hole, el anfitrión no resolvía el servicio de alertas y los avisos no salían.',
  },
  {
    what: 'Una credencial de solo lectura por integración',
    why: 'El informe semanal y el agente de IA leen Proxmox, Kuma y Glances sin poder cambiar nada. Si se pide un reinicio, el agente se niega y propone el comando.',
  },
  {
    what: 'Una alerta o una copia sin probar con un fallo real no está probada',
    why: 'Cada vía de alerta se disparó con un fallo de verdad y las copias se restauraron. Así apareció una tarea que decía «éxito» y guardaba una máquina de tres.',
  },
  {
    what: 'Docker en una VM, no en un contenedor LXC',
    why: 'Docker en un LXC comparte el núcleo con Proxmox. Una VM aísla mejor.',
  },
  {
    what: 'Homepage sin el socket de Docker montado',
    why: 'Montarlo equivale a dar permisos de root. Cada widget usa su propia credencial de solo lectura.',
  },
  {
    what: 'Nada personal ni secretos a la API de Gemini',
    why: 'Google guarda las peticiones en sus registros, así que al modelo solo se le envían datos de estado de la infraestructura.',
  },
  {
    what: 'No tocar la red ni el SSH del servidor en remoto sin una vía de emergencia',
    why: 'Un error de configuración a distancia puede dejarme fuera del servidor.',
  },
];
