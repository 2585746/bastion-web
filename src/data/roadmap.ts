/**
 * Hoja de ruta de Bastión. Para actualizarla basta con cambiar el estado
 * ('done' | 'doing' | 'todo') de un elemento o de una fase, y la fecha UPDATED.
 */
export type Status = 'done' | 'doing' | 'todo';

export interface RoadmapItem {
  text: string;
  status: Status;
}

export interface Phase {
  id: string;
  title: string;
  summary: string;
  status: Status;
  items: RoadmapItem[];
}

export const UPDATED = '13/11/2026';

export const statusLabel: Record<Status, string> = {
  done: 'Hecho',
  doing: 'En curso',
  todo: 'Pendiente',
};

export const phases: Phase[] = [
  {
    id: 'base',
    title: 'Infraestructura base',
    summary: 'Lo que ya está en marcha y verificado.',
    status: 'done',
    items: [
      { text: 'Hipervisor Proxmox VE validado y en producción', status: 'done' },
      { text: 'Acceso remoto con Tailscale, sin puertos abiertos en casa', status: 'done' },
      { text: 'DNS propio con Pi-hole', status: 'done' },
      { text: 'Monitorización, alertas al móvil y vigilante externo', status: 'done' },
      { text: 'Copias diarias de todas las máquinas con restauración probada', status: 'done' },
      { text: 'Plataforma Docker endurecida con Nginx Proxy Manager, Homepage y n8n', status: 'done' },
      { text: 'Informe semanal con IA y agente de operaciones de solo lectura', status: 'done' },
      { text: 'Inventario y 25 incidencias documentadas', status: 'done' },
    ],
  },
  {
    id: 'A',
    title: 'Cerrar la infraestructura',
    summary: 'Dejar la base completa y publicar la documentación.',
    status: 'doing',
    items: [
      { text: 'Copia cifrada fuera de casa con rclone (regla 3-2-1)', status: 'done' },
      { text: 'Tarea de copias que incluye todas las máquinas, también las futuras', status: 'done' },
      { text: 'Más memoria para la VM de Docker', status: 'done' },
      { text: 'Retirar el correo local de Proxmox, que nunca entregó nada', status: 'done' },
      { text: 'Publicar la documentación del proyecto en GitHub', status: 'doing' },
    ],
  },
  {
    id: 'D',
    title: 'Web pública en la nube',
    summary: 'Lo que deba ser público vive en la nube, no en casa.',
    status: 'doing',
    items: [
      { text: 'Presupuesto y alerta de gasto en Google Cloud', status: 'done' },
      { text: 'Dominio propio con HTTPS', status: 'done' },
      { text: 'Este sitio, publicado como sitio estático', status: 'doing' },
      { text: 'Máquina virtual en Google Cloud unida a la red privada', status: 'todo' },
      { text: 'Cortafuegos de aplicación (OWASP) y CrowdSec delante de la web', status: 'todo' },
    ],
  },
  {
    id: 'B',
    title: 'Hardware',
    summary: 'Más memoria y discos dedicados.',
    status: 'todo',
    items: [
      { text: 'Ampliar la memoria del servidor a 24 GB', status: 'todo' },
      { text: 'Disco propio para las máquinas virtuales', status: 'todo' },
      { text: 'Disco grande para copias, con más retención', status: 'todo' },
      { text: 'Mantenimiento y pruebas de hardware', status: 'todo' },
    ],
  },
  {
    id: 'C',
    title: 'Automatización con Ansible',
    summary: 'Configuración reproducible de todas las máquinas.',
    status: 'todo',
    items: [
      { text: 'Inventario y playbook de actualizaciones', status: 'todo' },
      { text: 'Playbooks publicados en GitHub', status: 'todo' },
    ],
  },
  {
    id: 'E',
    title: 'SOC: detectar y responder',
    summary: 'Detección de ataques con datos reales.',
    status: 'todo',
    items: [
      { text: 'Wazuh en una máquina virtual de Bastión', status: 'todo' },
      { text: 'Red aislada con una máquina objetivo y agente', status: 'todo' },
      { text: 'Honeypot en la nube conectado a Wazuh', status: 'todo' },
      { text: 'Informe diario de amenazas con n8n y Gemini', status: 'todo' },
    ],
  },
  {
    id: 'F',
    title: 'Active Directory en Proxmox',
    summary: 'Reconstruir el dominio desde cero y en el orden correcto.',
    status: 'todo',
    items: [
      { text: 'Controlador de dominio reconstruido', status: 'todo' },
      { text: 'Cliente Windows nuevo unido al dominio', status: 'todo' },
      { text: 'Servidor Linux unido al dominio', status: 'todo' },
    ],
  },
  {
    id: 'G',
    title: 'Laboratorios en Azure y AWS',
    summary: 'Entornos bajo demanda con las mismas herramientas.',
    status: 'todo',
    items: [
      { text: 'Laboratorio de Entra ID y Active Directory en Azure', status: 'todo' },
      { text: 'Mismos playbooks y plantillas de infraestructura en otro proveedor', status: 'todo' },
    ],
  },
];

export function progress(phase: Phase): { done: number; total: number } {
  return {
    done: phase.items.filter((i) => i.status === 'done').length,
    total: phase.items.length,
  };
}
