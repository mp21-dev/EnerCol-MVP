import { randomUUID } from 'crypto';
import { interactionModel } from '../models/interactionModel.js';

/**
 * Servicio para gestionar las interacciones
 */
class InteractionService {
  /**
   * Crea una nueva interacción
   * @param {Object} data - Datos de la interacción
   * @param {string} data.account_id - ID de la cuenta del cliente
   * @param {string} data.canal_origen - Canal de origen (WhatsApp, email, web)
   * @param {string} data.payload_texto - Contenido del mensaje
   * @param {string} data.timestamp - Timestamp de la solicitud
   * @returns {Object} Interacción creada con request_id
   */
  async createInteraction(data) {
    // Generar request_id único
    const request_id = randomUUID();

    // Crear objeto de interacción
    const interaction = {
      request_id,
      account_id: data.account_id,
      canal_origen: data.canal_origen,
      payload_texto: data.payload_texto,
      timestamp: data.timestamp,
      status: 'created',
      created_at: new Date().toISOString()
    };

    // Guardar en el modelo (estructura temporal)
    await interactionModel.save(interaction);

    return interaction;
  }

  /**
   * Obtiene una interacción por request_id
   * @param {string} request_id - ID de la solicitud
   * @returns {Object|null} Interacción encontrada o null
   */
  async getInteractionById(request_id) {
    return await interactionModel.findById(request_id);
  }

  /**
   * Obtiene todas las interacciones
   * @returns {Array} Lista de interacciones
   */
  async getAllInteractions() {
    return await interactionModel.findAll();
  }
}

export const interactionService = new InteractionService();

