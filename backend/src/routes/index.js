import express from 'express';
import healthRouter from './health.js';
import eventsRouter from './events.js';
import logsRouter from './logs.js';

const router = express.Router();

router.use('/health', healthRouter);
router.use('/events', eventsRouter);
router.use('/logs', logsRouter);

export default router;
