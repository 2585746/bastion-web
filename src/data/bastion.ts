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
    summary: 'Un informe semanal escrito por IA y un agente por chat que consulta el estado, pero no cambia nada.',
    text: 'n8n (automatización de flujos) y la API de Gemini generan cada lunes un informe con datos de Uptime Kuma, Glances y Proxmox, leídos con un token de solo lectura. El primer informe detectó por su cuenta una copia que decía «éxito» y solo guardaba una de tres máquinas. El agente por chat responde preguntas sobre el estado; si se le pide un reinicio, se niega y propone el comando.',
  },
  {
    id: 'hipervisor',
    icon: 'server',
    title: 'Hipervisor',
    summary: 'La base: un OptiPlex de segunda mano con Proxmox, probado antes de confiarle datos.',
    text: `Proxmox VE ${facts.proxmox} en UEFI con contenedores LXC (entornos ligeros que comparten el núcleo) sin privilegios y máquinas virtuales KVM (equipos completos con su propio núcleo). Cuentas separadas, una para el día a día y otra solo para emergencias, ambas con 2FA (segundo factor de acceso). Validé el hardware con Memtest86+ (prueba de la memoria) y SMART (autodiagnóstico de los discos) antes de usarlo, y la memoria ya está ampliada a 24 GB.`,
  },
  {
    id: 'red',
    icon: 'network',
    title: 'Red y acceso',
    summary: 'Acceso desde el móvil a todo lo de casa sin abrir ningún puerto en el router.',
    text: 'Tailscale como router de subred (la puerta de entrada a la red de casa): desde el móvil llego a cualquier equipo de casa sin abrir ni un puerto en el router. El anfitrión no usa el DNS de la red privada, para no depender de algo que él mismo aloja. Para publicar un servicio probé otra vía que tampoco abre puertos: un contenedor de casa abre un túnel WireGuard hacia fuera, contra un servidor en la nube con Caddy. Funciona como prueba de concepto, con un subdominio de prueba.',
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
    text: `Uptime Kuma con ${facts.monitores} monitores activos, Glances para los sensores del hardware y un latido cada 5 minutos a Healthchecks.io: si cae el servidor, la luz o internet, avisa un servicio que no vive dentro de lo que vigila. Todo llega al móvil por ntfy, y cada vía de aviso la probé provocando un fallo real.`,
  },
  {
    id: 'copias',
    icon: 'backup',
    title: 'Copias de seguridad',
    summary: 'Copias diarias de todas las máquinas, una cifrada fuera de casa, y una restauración hecha para comprobar que sirven.',
    text: 'Copia diaria de todas las máquinas en modo snapshot con compresión ZSTD (rápida y eficiente). Restauré una VM con base de datos, aislada de la red, y comparé el número de tablas antes y después. Cada noche, rclone (herramienta de copia a la nube) cifra las copias y las sube a Google Drive: así se cumple la regla 3-2-1 (tres copias, en dos soportes distintos, una fuera de casa). Pendiente: el disco de 2 TB que iba a guardar las copias murió el 18/11/2026; hasta que llegue otro, las copias locales viven en el disco del sistema y guardo menos días.',
  },
  {
    id: 'docker',
    icon: 'container',
    title: 'Plataforma Docker',
    summary: 'Los servicios corren en una máquina virtual endurecida, a la que solo se entra con clave.',
    text: 'VM Debian 13 endurecida: SSH solo con clave Ed25519 (un tipo moderno de clave), sin acceso de root, comprobado con sshd -T (muestra la configuración que de verdad aplica el servicio SSH). Un proyecto Compose por servicio, secretos con permisos 600 y bases de datos con versión fijada y sin puertos publicados. Ejecuta Nginx Proxy Manager, Homepage, n8n y GLPI (tickets e inventario).',
  },
];

export interface Decision {
  what: string;
  why: string;
}

export const decisions: Decision[] = [
  {
    what: 'Ningún puerto abierto en el router de casa',
    why: 'El acceso remoto va solo por Tailscale, así que nada de casa queda expuesto a internet. Para publicar algo, la conexión sale de casa: un túnel WireGuard hacia un servidor en la nube, probado con un subdominio de prueba. Por ahora descarté Cloudflare, para que el tráfico no pase por un tercero.',
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
    why: 'Cada vía de alerta se disparó con un fallo de verdad y las copias se restauraron. Así apareció una tarea que decía «éxito» y solo guardaba una máquina de tres.',
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
    why: 'Google guarda las peticiones en sus registros, así que al modelo solo le llegan datos de estado de la infraestructura.',
  },
  {
    what: 'No tocar la red ni el SSH del servidor en remoto sin una vía de emergencia',
    why: 'Un error de configuración a distancia puede dejarme fuera del servidor.',
  },
];
