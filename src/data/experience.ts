/**
 * Experiencia profesional. Fuente de verdad: los CV de public/cv/.
 * Sin nombres de personas, sin teléfono ni dirección. El centro se nombra por su código
 * y su operador, y el cliente final como «retailer internacional de moda».
 */
export interface JobBlock {
  title: string;
  items: string[];
}

export interface Job {
  id: string;
  period: string;
  role: string;
  org: string;
  /** Puntos breves para la línea de tiempo del inicio. */
  highlights: string[];
  /** Detalle completo para la página Sobre mí. */
  blocks: JobBlock[];
}

export const jobs: Job[] = [
  {
    id: 'gxo',
    period: 'Mayo de 2026 – actualidad',
    role: 'Técnico de soporte IT (deskside y field support) y referente de IT del sitio en mi turno',
    org: 'GXO Logistics España · centro de distribución LGO5, de un retailer internacional de moda',
    highlights: [
      'Redes: puertos de switch y VLAN, DHCP/DNS, LAN/Wi-Fi y control de acceso a la red (802.1X, MAB).',
      'Puestos críticos por VPN F5, comunicaciones de PLC y del sorter pick-to-light, CCTV en Genetec.',
      'Active Directory, Entra ID, imagen de equipos y flota de terminales Zebra y Bluebird bajo MDM.',
      'Aplicación de tickets de IT en Netlify y aplicación de asignación de equipos en Retool.',
    ],
    blocks: [
      {
        title: 'Infraestructura y red',
        items: [
          'Puertos de switch y VLAN, DHCP/DNS, LAN/Wi-Fi y puntos de acceso, junto al equipo corporativo de redes.',
          'Control de acceso a la red (NAC, 802.1X, MAB): registro de MAC y diagnóstico de autenticación, incluidos errores de VLAN.',
          'Puestos críticos para la operación (fichadores y terminales de planta) por VPN F5. Diagnóstico de las comunicaciones de PLC y del sorter pick-to-light con el fabricante.',
          'CCTV en Genetec Security Center: alta de cámaras, usuarios y permisos.',
        ],
      },
      {
        title: 'Usuarios, equipos y proveedores',
        items: [
          'Soporte presencial de primer nivel a usuarios de oficina y de planta: hardware, Windows, Microsoft 365 y aplicaciones de negocio.',
          'Imagen y despliegue de equipos. Cuentas, grupos y permisos en Active Directory y Microsoft Entra ID. Flota de terminales Zebra y Bluebird gestionada por MDM.',
          'Inventario y ciclo de vida de activos, impresoras Zebra y Ricoh, y casos con proveedores, garantías y RMA hasta su cierre.',
        ],
      },
      {
        title: 'Proyectos y desarrollo',
        items: [
          'Aplicación de tickets de IT (Netlify): la diseñé, desarrollé y desplegué para que el equipo de IT del sitio registre, asigne, priorice y siga incidencias y peticiones, con una vista única del trabajo abierto y su histórico completo.',
          'Aplicación de asignación de equipos (Retool): puesto de autoservicio en el que el operario escanea su tarjeta y la máquina para asignársela por turno, con check previo al uso, histórico y trazabilidad. Empezó como prototipo en Power Apps y la reconstruí en Retool.',
          'Escaneo y RFID en planta: integré escáneres ProGlove MARK Display (Bluetooth HID) y configuré lectores RFID Impinj R700 en líneas de producción. Redacté el manual de procedimientos del equipo.',
        ],
      },
    ],
  },
  {
    id: 'apleona',
    period: '6 meses',
    role: 'Auxiliar administrativo y de servicios IT',
    org: 'Apleona Iberia · servicio presencial en oficinas de IBM, Madrid',
    highlights: [
      'Correo corporativo de la oficina (buzones compartidos) y administración de Microsoft 365: usuarios, licencias y solicitudes.',
      'Compras de IT: pedidos, presupuestos de proveedores, facturación y conciliación del gasto.',
      'Herramientas en Excel (registro, inventario tipo semáforo, panel), bajo los estándares de seguridad de una multinacional.',
    ],
    blocks: [
      {
        title: 'Servicios IT y administración',
        items: [
          'Gestión del correo corporativo de la oficina: buzones compartidos, peticiones y seguimiento.',
          'Administración de servicios de Microsoft: usuarios, licencias y solicitudes de Microsoft 365.',
          'Compras de IT: pedidos de equipos y servicios, presupuestos de proveedores, y facturación y conciliación del gasto de IT.',
          'Herramientas en Excel (registro, inventario tipo semáforo, panel) para mejorar la operativa diaria, bajo los estándares de seguridad y confidencialidad de una multinacional.',
        ],
      },
    ],
  },
];

export interface TechGroup {
  title: string;
  items: string[];
}

/** Tecnologías por área, sin niveles ni porcentajes. */
export const techGroups: TechGroup[] = [
  { title: 'Sistemas', items: ['Windows 10/11', 'Windows Server', 'Active Directory', 'Entra ID', 'GPO', 'Microsoft 365'] },
  {
    title: 'Redes y seguridad',
    items: ['TCP/IP', 'VLAN', 'DHCP/DNS', 'Wi-Fi', 'NAC 802.1X/MAB', 'VPN F5', 'Tailscale/WireGuard', 'Endurecimiento SSH', 'UFW', 'Pi-hole'],
  },
  { title: 'Linux y virtualización', items: ['Debian', 'Ubuntu Server', 'Proxmox VE (KVM/LXC)', 'Hyper-V', 'Docker Compose', 'systemd'] },
  { title: 'Monitorización y copias', items: ['Uptime Kuma', 'Healthchecks.io', 'Glances', 'ntfy', 'vzdump de Proxmox', 'rclone'] },
  { title: 'Automatización y desarrollo', items: ['n8n', 'API de Gemini', 'PowerShell', 'Bash', 'JavaScript', 'Retool', 'Netlify', 'Git/GitHub'] },
  { title: 'Dispositivos y sistemas de planta', items: ['Zebra', 'Bluebird', 'ProGlove', 'RFID Impinj', 'MDM', 'Genetec Security Center'] },
];

export const education = [
  { title: 'Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)', detail: 'Universae · cursando' },
  { title: 'AWS Certified Cloud Practitioner', detail: 'En preparación, aún sin certificar' },
  { title: 'Excel avanzado', detail: 'Formación complementaria' },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio, con uso diario de documentación técnica y de proveedores' },
];
