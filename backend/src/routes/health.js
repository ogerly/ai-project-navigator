import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    const state = mongoose.connection.readyState;
    const status = state === 1 ? 'connected' : 'disconnected';
    console.log(`Database connection status: ${status}`);
    res.json({ status });
  } catch (error) {
    console.error('Error checking database connection:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

export default router;
