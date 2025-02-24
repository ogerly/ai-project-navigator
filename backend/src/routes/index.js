import express from 'express';
import healthRouter from './health.js';
import eventsRouter from './events.js';

const router = express.Router();

router.use('/health', healthRouter);
router.use('/events', eventsRouter);

export default router;
