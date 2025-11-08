# Backend - Sistema de Servicio Posventa Inteligente EnerCol

## Descripción
Backend desarrollado en Node.js con Express, siguiendo arquitectura en capas (rutas, controladores, servicios y modelos).

## Estructura del Proyecto
```
backend/
├── src/
│   ├── server.js              # Punto de entrada del servidor
│   ├── routes/                # Definición de rutas
│   │   └── interactionRoutes.js
│   ├── controllers/           # Lógica de controladores
│   │   └── interactionController.js
│   ├── services/              # Lógica de negocio
│   │   └── interactionService.js
│   └── models/                # Acceso a datos
│       └── interactionModel.js
├── data/                      # Almacenamiento temporal (JSON)
│   └── interactions.json
├── package.json
└── README.md
```

## Instalación
```bash
npm install
```

## Ejecución
```bash
npm run dev
```

El servidor se ejecutará en http://localhost:3000

## Endpoints

### POST /api/interactions/new
Crea una nueva solicitud de interacción multicanal.

**Request Body:**
```json
{
  "account_id": "string",
  "canal_origen": "string",
  "payload_texto": "string",
  "timestamp": "string (ISO 8601, opcional)"
}
```

**Response (201):**
```json
{
  "request_id": "uuid",
  "status": "created"
}
```

**Response (400):**
```json
{
  "error": "Campos obligatorios faltantes",
  "message": "Los campos account_id, canal_origen y payload_texto son obligatorios"
}
```

## Tecnologías
- Node.js
- Express
- CORS
- dotenv

