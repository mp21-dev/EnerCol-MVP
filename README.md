# Sistema de Servicio Posventa Inteligente EnerCol

## Descripción
Sistema full-stack para gestionar solicitudes de asistencia técnica y financiera a través de múltiples canales (WhatsApp, correo electrónico y portal web).

## Estructura del Proyecto
```
.
├── backend/          # Backend Node.js con Express
├── frontend/         # Frontend React con Vite
└── README.md
```

## Requisitos Previos
- Node.js (v18 o superior)
- npm (v9 o superior)

## Instalación

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Ejecución

### Backend
```bash
cd backend
npm run dev
```
El servidor se ejecutará en http://localhost:3000

### Frontend
En una nueva terminal:
```bash
cd frontend
npm run dev
```
La aplicación se ejecutará en http://localhost:5173

## User Story Implementada

**Como cliente industrial, quiero enviar solicitudes a través de canales digitales (WhatsApp, correo o portal web), para recibir asistencia técnica o financiera sin necesidad de llamar por teléfono.**

### Tarea TSK-001: Endpoint de Recepción de Solicitudes Multicanal

#### Backend
- ✅ Endpoint POST `/api/interactions/new`
- ✅ Validación de campos obligatorios
- ✅ Generación de request_id único (UUID)
- ✅ Almacenamiento temporal en archivo JSON
- ✅ Respuesta 201 con request_id y status

#### Frontend
- ✅ Formulario para ingresar solicitudes
- ✅ Campos: account_id, canal_origen, mensaje
- ✅ Comunicación con backend mediante API REST
- ✅ Visualización del request_id retornado
- ✅ Manejo de errores y validaciones

## Arquitectura

### Backend
Arquitectura en capas:
- **Rutas** (`routes/`): Definición de endpoints
- **Controladores** (`controllers/`): Lógica de control de peticiones
- **Servicios** (`services/`): Lógica de negocio
- **Modelos** (`models/`): Acceso a datos

### Frontend
Arquitectura modular:
- **Componentes** (`components/`): Componentes React reutilizables
- **Servicios** (`services/`): Comunicación con API
- **Estado**: useState/useEffect para manejo de estado local

## Tecnologías

### Backend
- Node.js
- Express
- CORS
- dotenv
- uuid

### Frontend
- React 18
- Vite
- CSS3

## Próximos Pasos
- Implementar autenticación y autorización
- Integrar base de datos (PostgreSQL/MongoDB)
- Agregar más endpoints (GET, PUT, DELETE)
- Implementar sistema de notificaciones
- Agregar pruebas unitarias e integración

