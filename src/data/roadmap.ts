/**
 * Hoja de ruta de Bastión. Para actualizarla basta con cambiar el estado de un elemento
 * ('done' | 'doing' | 'todo' | 'dropped') o de una fase, y la fecha UPDATED.
 * Fuente: el ROADMAP del proyecto. Sin nombres de host, direcciones ni identificadores internos.
 */
export type Status = 'done' | 'doing' | 'todo' | 'dropped';

export interface RoadmapItem {
  text: string;
  status: Status;
}

export interface Phase {
  id: string;
  title: string;
  summary: string;
  /** El estado de una fase nunca es «dropped»: se descartan elementos, no fases. */
  status: Exclude<Status, 'dropped'>;
  items: RoadmapItem[];
}

export const UPDATED = '13/11/2026';

export const statusLabel: Record<Status, string> = {
  done: 'Hecho',
  doing: 'En curso',
  todo: 'Pendiente',
  dropped: 'Descartado',
};

/** Orden de presentación: base, A, B, C, D, I, E, F, G, H. */
export const phases: Phase[] = [
  {
    id: 'base',
    title: 'Infraestructura base',
    summary: 'Lo que ya está en marcha y verificado.',
    status: 'done',
    items: [
      { text: 'Hipervisor validado con Memtest86+ y SMART, y Proxmox VE 9.2 en UEFI', status: 'done' },
      { text: 'Tailscale como router de subred, sin puertos abiertos en casa', status: 'done' },
      { text: 'DNS propio con Pi-hole y nombres locales', status: 'done' },
      { text: 'Uptime Kuma con 9 monitores activos, ntfy y Healthchecks.io como vigilante externo', status: 'done' },
      { text: 'Glances en el anfitrión para el hardware', status: 'done' },
      { text: 'Copias diarias de las tres máquinas con restauración probada', status: 'done' },
      { text: 'VM de Docker endurecida con Docker Compose', status: 'done' },
      { text: 'Nginx Proxy Manager y Homepage; Paperless y GLPI apagados a propósito', status: 'done' },
      { text: 'n8n con informe semanal de Gemini y agente de operaciones por chat de solo lectura', status: 'done' },
      { text: 'Inventario y 27 incidencias documentadas', status: 'done' },
    ],
  },
  {
    id: 'A',
    title: 'Cerrar la infraestructura',
    summary: 'Dejar la base completa y publicar la documentación.',
    status: 'doing',
    items: [
      { text: 'A1 · Copia cifrada fuera de casa con rclone (regla 3-2-1)', status: 'done' },
      { text: 'A2 · Tarea de copias en modo «Todo», que incluye también las máquinas futuras', status: 'done' },
      { text: 'A3 · Más memoria (4 GB) para la VM de Docker', status: 'done' },
      { text: 'A4 · Paperless apagado a propósito y retirado de Homepage y de Uptime Kuma', status: 'done' },
      { text: 'A5 · Acceso SSH del hipervisor solo con clave (descartado por decisión el 13/11/2026)', status: 'dropped' },
      { text: 'A6 · Retirar el correo local de Proxmox, que nunca entregó nada', status: 'done' },
      { text: 'A7 · Subir la documentación de Bastión a GitHub con la estructura nueva', status: 'todo' },
    ],
  },
  {
    id: 'B',
    title: 'Hardware',
    summary: 'Más memoria y discos dedicados.',
    status: 'todo',
    items: [
      { text: 'B1 · Ampliar la memoria a 24 GB', status: 'todo' },
      { text: 'B2 · Disco propio para las máquinas virtuales y mover la VM de Docker', status: 'todo' },
      { text: 'B3 · Disco de 2 TB para copias, con retención de 7 diarias y 2 semanales', status: 'todo' },
      { text: 'B4 · Pasta térmica, Memtest86+ y SMART largo del disco nuevo', status: 'todo' },
    ],
  },
  {
    id: 'C',
    title: 'Linux y Ansible',
    summary: 'Configuración reproducible de todas las máquinas.',
    status: 'todo',
    items: [
      { text: 'C1 · Doce clases de Linux en un contenedor de prácticas', status: 'todo' },
      { text: 'C2 · Ansible: inventario, playbook de actualizaciones y bootstrap', status: 'todo' },
      { text: 'C3 · Playbooks publicados en GitHub', status: 'todo' },
    ],
  },
  {
    id: 'D',
    title: 'Web pública en la nube',
    summary: 'Lo que deba ser público vive en la nube, no en casa.',
    status: 'doing',
    items: [
      { text: 'D1 · Presupuesto y alerta de gasto en Google Cloud (a la espera de la verificación de la cuenta)', status: 'doing' },
      { text: 'D2 · Este sitio en GitHub Pages con dominio propio (portafolio hecho; blog e incidencias pendientes)', status: 'done' },
      { text: 'D3 · Máquina virtual en Google Cloud unida a la red privada', status: 'todo' },
      { text: 'D4 · Dominio propio con HTTPS: hecho en GitHub Pages, pendiente en la máquina de la nube', status: 'doing' },
      { text: 'D5 · Cortafuegos de aplicación (OWASP) y CrowdSec delante de la web', status: 'todo' },
    ],
  },
  {
    id: 'I',
    title: 'Publicar servicios: ¿abrir puertos o salir a la red?',
    summary:
      'Estudiar cómo publicar algo desde Bastión, con qué riesgo y qué cambiaría en esta web. La decisión actual sigue vigente.',
    status: 'todo',
    items: [
      { text: 'I1 · Comparar tres opciones: seguir cerrado y publicar desde la nube, túnel saliente, o abrir puertos en una zona aislada', status: 'todo' },
      { text: 'I2 · Escribir la decisión con su riesgo, su coste y su plan de vuelta atrás', status: 'todo' },
      { text: 'I3 · Prueba de concepto con un servicio de usar y tirar', status: 'todo' },
      { text: 'I4 · Adaptar esta web al resultado: alojamiento, despliegue y cifras', status: 'todo' },
    ],
  },
  {
    id: 'E',
    title: 'SOC: detectar y responder',
    summary: 'Detección de ataques con datos reales.',
    status: 'todo',
    items: [
      { text: 'E1 · Wazuh en una máquina virtual de Bastión', status: 'todo' },
      { text: 'E2 · Red aislada con una máquina objetivo y agente', status: 'todo' },
      { text: 'E3 · Kali aislado para pruebas controladas', status: 'todo' },
      { text: 'E4 · Honeypot Cowrie en la nube conectado a Wazuh', status: 'todo' },
      { text: 'E5 · Informe diario de amenazas con Wazuh, n8n y Gemini', status: 'todo' },
    ],
  },
  {
    id: 'F',
    title: 'Active Directory en Proxmox',
    summary: 'Reconstruir el dominio desde cero y en el orden correcto.',
    status: 'todo',
    items: [
      { text: 'F1 · Controlador de dominio reconstruido en orden', status: 'todo' },
      { text: 'F2 · Cliente Windows nuevo unido al dominio', status: 'todo' },
      { text: 'F3 · Servidor Linux unido al dominio', status: 'todo' },
    ],
  },
  {
    id: 'G',
    title: 'Laboratorios en Azure y AWS',
    summary: 'Entornos bajo demanda con las mismas herramientas.',
    status: 'todo',
    items: [
      { text: 'G1 · Azure for Students activado, dos semanas antes de que caduque Google Cloud', status: 'todo' },
      { text: 'G2 · Laboratorio de Entra ID y Active Directory en Azure', status: 'todo' },
      { text: 'G3 · Mismos Ansible y Terraform que en Google Cloud, como prueba de migración', status: 'todo' },
    ],
  },
  {
    id: 'H',
    title: 'Oracle y cierre de Google Cloud',
    summary: 'Migrar a un nivel gratuito y cerrar los recursos de Google Cloud.',
    status: 'todo',
    items: [
      { text: 'H1 · Web y monitorización a Oracle Always Free', status: 'todo' },
      { text: 'H2 · Copia de los datos de la nube al laboratorio', status: 'todo' },
      { text: 'H3 · Borrar todos los recursos de Google Cloud', status: 'todo' },
    ],
  },
];

/** Los elementos descartados no cuentan en el total de una fase. */
export function progress(phase: Phase): { done: number; total: number } {
  const active = phase.items.filter((i) => i.status !== 'dropped');
  return {
    done: active.filter((i) => i.status === 'done').length,
    total: active.length,
  };
}
