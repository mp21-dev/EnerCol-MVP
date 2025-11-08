# Frontend - Sistema de Servicio Posventa Inteligente EnerCol

## Descripción
Frontend desarrollado en React con Vite, con componentes modulares y comunicación con el backend mediante API REST.

## Estructura del Proyecto
```
frontend/
├── src/
│   ├── components/            # Componentes React
│   │   ├── InteractionForm.jsx
│   │   └── InteractionForm.css
│   ├── services/              # Servicios de API
│   │   └── interactionService.js
│   ├── App.jsx               # Componente principal
│   ├── App.css
│   ├── main.jsx              # Punto de entrada
│   └── index.css
├── index.html
├── vite.config.js
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

La aplicación se ejecutará en http://localhost:5173

## Configuración
Para cambiar la URL del backend, crear un archivo `.env` en la raíz del proyecto:
```
VITE_API_URL=http://localhost:3000/api
```

## Tecnologías
- React 18
- Vite
- CSS3

