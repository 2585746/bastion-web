import type { IconName } from '../components/Icon.astro';

export interface Layer {
  id: string;
  icon: IconName;
  title: string;
  text: string;
  featured?: boolean;
}

/** Capas del proyecto. Sin direcciones ni nombres internos de equipos. */
export const layers: Layer[] = [
  {
    id: 'hipervisor',
    icon: 'server',
    title: 'Hipervisor',
    text: 'Proxmox VE 9.2 en UEFI con contenedores LXC sin privilegios y máquinas virtuales KVM. Cuentas separadas, una para el día a día y otra solo para emergencias, ambas con 2FA. Validé el hardware con Memtest86+ y SMART antes de confiarle datos.',
  },
  {
    id: 'red',
    icon: 'network',
    title: 'Red y acceso',
    text: 'Tailscale como router de subred: desde el móvil llego a cualquier equipo de casa sin abrir ni un puerto en el router. El anfitrión no usa el DNS de la red privada, para no depender de algo que él mismo aloja.',
  },
  {
    id: 'dns',
    icon: 'dns',
    title: 'DNS',
    text: 'Pi-hole v6 en un contenedor sin privilegios, solo para los dispositivos de la red privada. Bloquea unos 303 000 dominios y resuelve nombres locales que apuntan al proxy inverso.',
  },
  {
    id: 'monitorizacion',
    icon: 'pulse',
    title: 'Monitorización y alertas',
    text: 'Uptime Kuma con 9 monitores activos, Glances para los sensores del hardware y un latido cada 5 minutos a Healthchecks.io: si cae el servidor, la luz o internet, avisa un servicio que no vive dentro de lo que vigila. Todo llega al móvil por ntfy y cada vía se probó con un fallo real.',
  },
  {
    id: 'copias',
    icon: 'backup',
    title: 'Copias de seguridad',
    text: 'Copia diaria de todas las máquinas en modo snapshot con compresión ZSTD. Restauré una VM con base de datos, aislada de la red, y comparé el número de tablas antes y después. La copia cifrada con rclone a Google Drive completa la regla 3-2-1.',
  },
  {
    id: 'docker',
    icon: 'container',
    title: 'Plataforma Docker',
    text: 'VM Debian 13 endurecida: SSH solo con clave Ed25519, sin acceso de root, verificado con sshd -T. Un proyecto Compose por servicio, secretos con permisos 600 y bases de datos con versión fijada y sin puertos publicados. Ejecuta Nginx Proxy Manager, Homepage y n8n.',
  },
  {
    id: 'automatizacion',
    icon: 'bot',
    title: 'Automatización e IA',
    featured: true,
    text: 'n8n y la API de Gemini generan un informe semanal con datos de Uptime Kuma, Glances y Proxmox, leídos con un token de solo lectura. El primero detectó por su cuenta una copia que decía «éxito» y guardaba una de tres máquinas. Además hay un agente por chat que consulta el estado y se niega a ejecutar cambios.',
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
