# Todo Mecánica Express

Proyecto de digitalización para **Todo Mecánica Express**, taller mecánico ubicado en Barrancas, San Felipe, Región de Valparaíso.

## Objetivo

Construir una solución web que conecte la captación de clientes con la operación diaria del taller, avanzando mediante un modelo evolutivo: cada versión se valida con el dueño y los trabajadores antes de ampliar el alcance.

## Componentes

### 1. Sitio público

- Presentación del taller.
- Catálogo de servicios.
- Fotografías y trabajos realizados.
- Información de contacto, horarios y ubicación.
- Integración con WhatsApp, Instagram, TikTok y Google Maps.
- Solicitud de diagnóstico o reserva de servicios.
- Optimización para búsquedas locales y dispositivos móviles.

### 2. Sistema de gestión

- Registro de clientes y vehículos.
- Agenda y control de disponibilidad.
- Solicitudes de diagnóstico.
- Órdenes de trabajo.
- Cotizaciones y aprobación del cliente.
- Estados de reparación e historial del vehículo.
- Recordatorios, seguimiento y reportes en versiones posteriores.

## Hoja de ruta inicial

| Etapa | Propósito |
| --- | --- |
| V0 — Descubrimiento | Levantar el funcionamiento real del taller, sus servicios, recursos y problemas principales. |
| V1 — Captación | Publicar el sitio, mejorar el contacto y medir las consultas recibidas. |
| V2 — Agenda | Gestionar solicitudes, horarios, capacidad y confirmaciones. |
| V3 — Operación | Incorporar diagnósticos, cotizaciones, órdenes de trabajo y evidencias. |
| V4 — Seguimiento | Agregar historial, notificaciones, portal del cliente y reportes. |
| V5 — Expansión | Evaluar inventario, pagos, facturación e integraciones avanzadas. |

## Flujo de trabajo con ramas

El repositorio seguirá un ciclo evolutivo similar a una espiral:

- `main` representa la última versión aprobada, validada y funcional. Es la versión que podrá revisar el responsable del taller.
- Todo desarrollo, experimento o cambio solicitado mediante feedback se realiza en una rama temporal creada desde `main`.
- Mientras una versión esté en revisión, se refina dentro de su rama sin afectar la versión estable.
- Una versión solamente se incorpora a `main` después de ser presentada, revisada y aprobada.
- Los cambios descartados no se incorporan a `main`.
- Después de integrar o descartar el trabajo, la rama temporal se elimina para mantener limpio el repositorio.
- Las versiones validadas se identificarán con etiquetas de Git para conservar hitos históricos sin mantener ramas antiguas.

### Convención inicial

| Tipo de rama | Ejemplo | Uso |
| --- | --- | --- |
| Versión | `version/v1-captacion` | Integrar y presentar una vuelta completa de la espiral. |
| Funcionalidad | `feature/agenda-semanal` | Desarrollar una función concreta. |
| Feedback | `feedback/v1-ajustes-inicio` | Aplicar observaciones recibidas durante una validación. |
| Corrección | `fix/reserva-duplicada` | Corregir un defecto específico. |
| Documentación | `docs/flujo-recepcion` | Modificar requisitos o documentación. |

Cuando una versión necesite varias funciones, las ramas `feature/*` se integrarán primero en su rama `version/*`. La rama de versión se fusionará con `main` únicamente al concluir la validación.

## Principios del proyecto

- No programar módulos sin validar primero la necesidad.
- Priorizar una experiencia simple para el personal del taller.
- Separar los servicios de duración conocida de las fallas que requieren diagnóstico.
- Proteger los datos personales y limitar el acceso según el rol.
- Mantener documentación y criterios de aceptación por versión.
- No almacenar credenciales, datos reales de clientes ni archivos sensibles en el repositorio.
- Mantener `main` estable, presentable y ejecutable.
- Registrar el feedback y la decisión de aprobación antes de fusionar cada versión.

## Estado

**Fase actual:** descubrimiento y levantamiento de requisitos.

Aún no se ha seleccionado la arquitectura definitiva ni se ha iniciado la implementación. La siguiente etapa consiste en entrevistar al responsable del taller y documentar el flujo desde la solicitud del cliente hasta la entrega del vehículo.
