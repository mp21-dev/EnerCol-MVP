import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del archivo JSON temporal
const DATA_FILE = path.join(__dirname, '../../data/interactions.json');

/**
 * Modelo para gestionar las interacciones en almacenamiento temporal (JSON)
 */
class InteractionModel {
  constructor() {
    this.ensureDataFile();
  }

  /**
   * Asegura que el archivo de datos existe
   */
  async ensureDataFile() {
    try {
      const dataDir = path.dirname(DATA_FILE);
      await fs.mkdir(dataDir, { recursive: true });
      
      // Verificar si el archivo existe, si no, crearlo con array vacío
      try {
        await fs.access(DATA_FILE);
      } catch {
        await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
      }
    } catch (error) {
      console.error('Error al inicializar el archivo de datos:', error);
    }
  }

  /**
   * Guarda una interacción en el archivo JSON
   * @param {Object} interaction - Datos de la interacción
   * @returns {Promise<Object>} Interacción guardada
   */
  async save(interaction) {
    try {
      await this.ensureDataFile();
      
      // Leer interacciones existentes
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      const interactions = JSON.parse(data);

      // Agregar nueva interacción
      interactions.push(interaction);

      // Guardar actualización
      await fs.writeFile(DATA_FILE, JSON.stringify(interactions, null, 2));

      return interaction;
    } catch (error) {
      console.error('Error al guardar interacción:', error);
      throw new Error('Error al guardar la interacción');
    }
  }

  /**
   * Busca una interacción por request_id
   * @param {string} request_id - ID de la solicitud
   * @returns {Promise<Object|null>} Interacción encontrada o null
   */
  async findById(request_id) {
    try {
      await this.ensureDataFile();
      
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      const interactions = JSON.parse(data);
      
      return interactions.find(interaction => interaction.request_id === request_id) || null;
    } catch (error) {
      console.error('Error al buscar interacción:', error);
      return null;
    }
  }

  /**
   * Obtiene todas las interacciones
   * @returns {Promise<Array>} Lista de interacciones
   */
  async findAll() {
    try {
      await this.ensureDataFile();
      
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al obtener interacciones:', error);
      return [];
    }
  }
}

export const interactionModel = new InteractionModel();

