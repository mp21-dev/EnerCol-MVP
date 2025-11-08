import express from 'express';
import { createInteraction } from '../controllers/interactionController.js';

const router = express.Router();

/**
 * @route POST /api/interactions/new
 * @desc Crear una nueva solicitud de interacción multicanal
 * @access Public
 */
router.post('/new', createInteraction);

export default router;

