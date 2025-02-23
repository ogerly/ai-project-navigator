import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const state = mongoose.connection.readyState;
    const status = state === 1 ? 'connected' : 'disconnected';
    res.json({ status });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

export default router;
