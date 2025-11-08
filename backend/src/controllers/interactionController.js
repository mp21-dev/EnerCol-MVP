import { interactionService } from '../services/interactionService.js';

/**
 * Controlador para crear una nueva interacción
 * @param {Object} req - Request object de Express
 * @param {Object} res - Response object de Express
 */
export const createInteraction = async (req, res) => {
  try {
    const { account_id, canal_origen, payload_texto, timestamp } = req.body;

    // Validar campos obligatorios
    if (!account_id || !canal_origen || !payload_texto) {
      return res.status(400).json({
        error: 'Campos obligatorios faltantes',
        message: 'Los campos account_id, canal_origen y payload_texto son obligatorios'
      });
    }

    // Crear la interacción usando el servicio
    const interaction = await interactionService.createInteraction({
      account_id,
      canal_origen,
      payload_texto,
      timestamp: timestamp || new Date().toISOString()
    });

    // Retornar respuesta exitosa
    res.status(201).json({
      request_id: interaction.request_id,
      status: 'created'
    });
  } catch (error) {
    console.error('Error en createInteraction:', error);
    res.status(500).json({
      error: 'Error al crear la interacción',
      message: error.message
    });
  }
};

