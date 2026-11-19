# Brief de textos: martindeprada.dev

> Archivo de trabajo de la skill `web-natural` (rama `textos-web-natural`, 19/11/2026).
> Aquí van la hoja de hechos, el lector, la promesa y la puntuación privada. Nada de esto se publica en el sitio.
> Datos: MODELO + FUENTES LOCALES (sin investigación de voz del cliente en internet: no hay reseñas ni testimonios).

## 1. Lector, origen y nivel de conciencia

| Lector | De dónde llega | Qué trae en la cabeza | Qué necesita para seguir |
|---|---|---|---|
| Reclutador o responsable de IT | Enlace del CV, LinkedIn o GitHub | «Técnico de soporte IT, estudiante de ASIR, tiene un laboratorio» | En una pantalla: qué hace hoy, qué ha montado, que es real, y cómo contactarlo |
| Técnico de IT que evalúa | Enlace compartido o LinkedIn | Escepticismo: «¿otro homelab de tutorial?» | Mecanismos concretos, decisiones con su porqué, fallos reales |
| Quien quiere reproducirlo | GitHub o búsqueda | «¿Cómo lo montó?» | Capas, conexiones, incidencias con causa y solución |

**Nivel de conciencia:** 4 (conoce el producto). Ya sabe quién es Martín por el CV o LinkedIn. Se abre con
diferenciación y pruebas, y se responde a las objeciones: «¿es real?», «¿solo hace helpdesk?», «¿qué falta?».

**Promesa que debe repetir la primera pantalla** (la del CV y LinkedIn): soporte IT en un centro 24/7 + el laboratorio
Bastión. Mismas palabras: «soporte IT», «24/7», «Bastión», «Proxmox».

**Objeciones que la web debe contestar:**
1. «¿Es un laboratorio de verdad o capturas de un tutorial?» → fallos publicados con causa y solución, decisiones con su porqué.
2. «Lleva poco en el puesto.» → lo que hace en el centro, en concreto (CV), y el laboratorio como práctica de sistemas.
3. «¿Exagera?» → descalificación honesta: es un laboratorio, no producción; SOC, Active Directory en Proxmox, Ansible y nube están sin hacer; el disco de copias murió.
4. «¿Cómo lo contacto?» → un solo CTA principal por vista y el correo al final.

## 2. Cadena del «¿y qué?»

- Copias con restauración probada → no se fía de que una copia diga «correcta» → **encontró una copia que decía «successful» y guardaba una máquina de tres** → en un equipo, es quien comprueba antes de que el problema llegue a producción.
- Ningún puerto abierto en el router → nada de casa queda expuesto → **incluso para publicar algo, la conexión sale de casa (túnel WireGuard saliente)** → entiende el riesgo antes que la comodidad.
- El vigilante no vive dentro de lo que vigila → si cae la luz o internet, avisa un servicio externo → **sabe diseñar alertas que avisan cuando de verdad hace falta**.
- Agente de IA de solo lectura → usa IA sin darle permisos de cambio → **automatiza sin perder el control**.
- Fallos documentados con formato fijo → **se puede ver cómo razona, no solo lo que sabe**.

Fondo de la cadena (lo que el reclutador compra): alguien que comprueba lo que de verdad pasa, y que deja escrito el porqué.

## 3. Hoja de hechos (puerta de afirmaciones)

Fuentes: **W** = repo `bastion-web` (`src/data/*.ts`, `incidencias.json`, `README.md`). **E** = `bastion/docs/00-estado-actual.md`.
**I** = `docs/01-inventario.md`. **R** = `docs/ROADMAP.md` (19/11/2026). **P** = `docs/plan-maestro.md`. **B** = `docs/bitacora.md`.
**N** = `docs/03-incidencias.md`. **RB10** = `runbooks/10-tunel-wireguard-vps.md`.

### Persona y trabajo
| Hecho | Fuente |
|---|---|
| Técnico de soporte IT (deskside y field) y referente de IT del sitio en su turno, GXO Logistics España, centro de distribución de un retailer internacional de moda, desde mayo de 2026 | W `experience.ts` (de los CV) |
| Centro de distribución 24/7 | W `index.astro` (de los CV) |
| Redes (switch, VLAN, DHCP/DNS, Wi-Fi), NAC 802.1X/MAB, VPN F5, PLC y sorter, CCTV Genetec, AD, Entra ID, MDM Zebra/Bluebird | W `experience.ts` |
| Construyó una app de tickets (Netlify) y una de asignación de equipos (Retool); integró ProGlove y RFID Impinj R700 | W `experience.ts` |
| 6 meses en Apleona Iberia (oficinas de IBM), Microsoft 365 y compras de IT | W `experience.ts` |
| Estudia ASIR (Universae, cursando). AWS Cloud Practitioner en preparación, **sin certificar** | W `experience.ts` |
| Inglés intermedio | W `experience.ts` |
| Madrid; abierto a reubicación en Alemania y Países Bajos | W `index.astro` |
| Objetivo: carrera orientada a la nube (infraestructura híbrida, automatización y seguridad) | W `sobre-mi.astro` |
| Bastión existe para practicar «sin las limitaciones de permisos de mi puesto» | W `bastion/index.astro` |

### Bastión: hecho
| Hecho | Fuente |
|---|---|
| Empezó en octubre de 2026 como Ubuntu Server en Hyper-V dentro del PC | E §1, W |
| Dell OptiPlex 7020 de segunda mano por 50 €; validado con Memtest86+ y SMART | E §2 |
| Proxmox VE 9.2 en UEFI; LXC sin privilegios y VM KVM; 2FA TOTP en las cuentas | E, W `facts` |
| RAM ampliada a 24 GB (16/11/2026) | E, R B1 |
| Ningún puerto abierto en el router; acceso remoto por Tailscale como router de subred | E §3, R |
| Pi-hole v6, unos 303 000 dominios bloqueados, nombres locales | E §5 |
| Uptime Kuma: 9 monitores activos a 16/11 (`facts.monitores`); el 19/11 se añadió un monitor para la prueba del túnel | W `facts`, I §6 |
| Latido cada 5 min a Healthchecks.io; alertas por ntfy; cada vía probada con un fallo real | E §4 |
| Copia diaria de todas las máquinas (modo «Todo»), snapshot ZSTD; copia nocturna cifrada con rclone a Google Drive; regla 3-2-1; restauración probada (VM con base de datos, comparando tablas) | E §6, I |
| Incidencia 24: la copia decía «successful» y solo guardaba una de tres máquinas; el primer informe semanal lo detectó | E §6, §9 |
| VM Debian 13 endurecida para Docker; SSH solo con clave Ed25519, sin root, verificado con `sshd -T` | E §7 |
| Servicios: Nginx Proxy Manager, Homepage, n8n y GLPI (encendido desde 14/11); Paperless apagado a propósito | E §8, I |
| n8n + Gemini: informe semanal y agente por chat de solo lectura que se niega a reiniciar y propone el comando | E §9 |
| Fase I hecha como **prueba de concepto**: túnel WireGuard saliente desde casa hacia un VPS en Google Cloud con Caddy, con un subdominio de prueba; el router sigue sin puertos abiertos; Cloudflare descartado por ahora | R I1–I3, B 19/11, RB10 |
| Fase A cerrada (A5 descartado por decisión) | P, R |
| Web en GitHub Pages con dominio propio y HTTPS | R D2 |
| Incidencias documentadas en el registro del proyecto: 1 a 27 y la 29 (28 en total) | N, R |
| **Incidencias publicadas en la web:** se cuentan desde `incidencias.json` (hoy 5) | W, B 16/11 |
| Cuatro reglas de diagnóstico (salida literal, escalera de red, configuración efectiva, registros) | E §10 |

### Bastión: NO hecho (no se presenta como hecho)
| Hecho | Fuente |
|---|---|
| El disco de copias de 2 TB murió el 18/11/2026; pendiente de comprar otro. Las copias locales viven en el disco del sistema con retención reducida | R B3, I, E |
| SOC (Wazuh, honeypot), Active Directory en Proxmox, Ansible, VM de la web en la nube, WAF, Azure/AWS, Oracle: pendientes | R |
| I4 (adaptar la web al túnel) pendiente | R |
| Página de Estado sin datos publicados | W `estado` |
| La versión en inglés completa no existe todavía | W `en/` |
| SSH del hipervisor solo con clave: descartado por decisión (no afirmar que el hipervisor solo acepta clave) | R A5, I |

### Prohibido en el sitio
IP (privadas, de Tailscale o del túnel), nombres internos de equipos, el nombre del subdominio de prueba, topics de ntfy,
tokens, IDs de proyectos de Google Cloud, datos personales que no estén ya en la web. Ni «+X años», ni clientes, ni testimonios.

## 4. Inventario de pruebas

- Incidencias publicadas con síntoma, diagnóstico, causa, solución y aprendizaje (`/bastion/incidencias`). Las primeras, de octubre de 2026, tienen campos «No documentado»: se dice.
- Decisiones de diseño con su porqué (`/bastion#decisiones`).
- Diagrama de conexiones (`/bastion/conexiones`).
- Extractos saneados de terminal (portada).
- CV en PDF (ES y EN).
- **No hay:** testimonios, recomendaciones, certificaciones obtenidas, métricas de uso. La copia se queda tranquila en consecuencia.

## 5. Promesa de la portada (elegida)

> **Soporte IT en un centro 24/7. En casa, un servidor propio que vigilo y documento.**
> Subtítulo: qué es Bastión en concreto (cero puertos abiertos, alertas, copias restauradas, IA de solo lectura) + que sus
> fallos están publicados. CTA principal: «Ver cómo funciona Bastión». Secundario: «Descargar CV (PDF)».

## 6. Puntuación privada (variante elegida de la portada, primera pantalla + bloque de contacto)

Sin anclas de calibración en este equipo (`references/calibration-anchors.md` no existe): puntuación con criterio
propio, conservadora.

| Dimensión | Texto anterior | Pasada 1 | Pasada 2 (final) | Nota |
|---|---|---|---|---|
| Claridad | 6 | 8 | 8 | El H1 anterior era solo el nombre; ahora dice qué hace y qué ha montado |
| Especificidad | 7 | 8 | 9 | Pasada 2: el subtítulo nombra el fallo de la copia («una máquina de tres») |
| Voz | 6 | 7 | 8 | Fuera la mezcla inglés/español del rótulo; primera persona, frases cortas |
| Deseo | 5 | 6 | 7 | Para el reclutador el «después» es «puedo comprobarlo antes de llamarlo» |
| Prueba | 6 | 8 | 8 | La cifra de 27 no se podía comprobar en la web: ahora sale de las publicadas |
| Urgencia | 3 | 5 | 6 | Sin escasez inventada: «busco el salto a sistemas, abierto a reubicación» |
| Fluidez | 6 | 7 | 8 | Titular → prueba → CTA; el contacto repite el mismo verbo |
| **Total** | **39/70** | **49/70** | **54/70** | |

Por debajo de 56: el límite no es el texto sino el inventario de pruebas (no hay testimonios ni certificaciones, y solo
5 incidencias publicadas). Ver «Para que sea cierto».

Puntuación de `/bastion` (cabecera + capas), pasada final: Claridad 8 · Especificidad 9 · Voz 8 · Deseo 6 · Prueba 8 ·
Urgencia n/a (página de referencia) · Fluidez 8 → 47/60.

## 7. Para que sea cierto (ideas que se quedaron fuera)

| Idea | Frase que desbloquearía | Qué hace falta |
|---|---|---|
| Publicar las 28 incidencias | «28 fallos reales, publicados con su causa y su solución» | Revisar y pasar el resto al JSON |
| Enlazar el repo de documentación | «Los runbooks para montarlo tú están en GitHub» | Confirmar que el repo `bastion` es público y está saneado |
| Página de Estado con datos | «Mira ahora mismo si Bastión está en verde» | Fase I4: publicar el estado por el túnel |
| Servicio real detrás del túnel | «Esta web la sirve Bastión desde casa, sin abrir puertos» | Pasar de prueba de concepto a servicio y vigilarlo |
| Certificación AWS | «AWS Certified Cloud Practitioner» | Aprobar el examen |
| SOC con Wazuh | «Detecto ataques reales contra un honeypot» | Fase E |
| Testimonio | Una frase de un compañero o responsable | Pedirlo, con permiso para publicarlo |
| Copias en disco dedicado | «Siete diarias y dos semanales en un disco aparte» | Comprar el disco de 2 TB (B3) |
| Tiempo de respuesta en el contacto | «Contesto en menos de 24 horas» | Que Martín lo confirme |
| Inglés en la web | Versión inglesa completa de Bastión | Redactarla (la portada EN ya resume) |
