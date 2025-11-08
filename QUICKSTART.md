# Guía de Inicio Rápido

## Paso 1: Instalar Dependencias

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

## Paso 2: Ejecutar el Backend

En la terminal, desde la carpeta `backend`:
```bash
npm run dev
```

El servidor estará disponible en: http://localhost:3000

Verificar que funciona:
```bash
curl http://localhost:3000/api/health
```

## Paso 3: Ejecutar el Frontend

En una nueva terminal, desde la carpeta `frontend`:
```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:5173

## Paso 4: Probar la Funcionalidad

1. Abre el navegador en http://localhost:5173
2. Completa el formulario:
   - **ID de Cuenta**: Cualquier ID (ej: "CLI-001")
   - **Canal de Origen**: Selecciona entre Web, WhatsApp o Email
   - **Mensaje**: Escribe tu solicitud
3. Haz clic en "Enviar Solicitud"
4. Verás el `request_id` generado en pantalla

## Verificar Datos Guardados

Las interacciones se guardan en: `backend/data/interactions.json`

Puedes verificar el archivo después de crear una solicitud.

## Solución de Problemas

### El backend no inicia
- Verifica que el puerto 3000 esté disponible
- Revisa que todas las dependencias estén instaladas

### El frontend no se conecta al backend
- Asegúrate de que el backend esté corriendo
- Verifica que la URL en `frontend/src/services/interactionService.js` sea correcta
- Revisa la consola del navegador para errores de CORS

### Error al guardar interacciones
- Verifica que la carpeta `backend/data/` tenga permisos de escritura
- El archivo `interactions.json` se creará automáticamente

