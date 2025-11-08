const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

/**
 * Servicio para interactuar con la API de interacciones
 */
export const interactionService = {
  /**
   * Crea una nueva interacción
   * @param {Object} data - Datos de la interacción
   * @param {string} data.account_id - ID de la cuenta del cliente
   * @param {string} data.canal_origen - Canal de origen (web, whatsapp, email)
   * @param {string} data.payload_texto - Contenido del mensaje
   * @returns {Promise<Object>} Respuesta de la API con request_id
   * @throws {Error} Si hay un error en la petición
   */
  async createInteraction(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/interactions/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_id: data.account_id,
          canal_origen: data.canal_origen,
          payload_texto: data.payload_texto,
          timestamp: new Date().toISOString()
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || result.error || 'Error al crear la interacción')
      }

      return result
    } catch (error) {
      // Si es un error de red, proporcionar un mensaje más amigable
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('No se pudo conectar con el servidor. Por favor, verifique que el backend esté ejecutándose.')
      }
      throw error
    }
  }
}

