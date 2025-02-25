import express from 'express';
import TestModel from '../models/TestModel.js';

const router = express.Router();

// Create a new test document
router.post('/', async (req, res) => {
  try {
    const testDoc = await TestModel.create({ message: 'Test message' });
    res.status(201).json({ message: 'Document created', data: testDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all test documents
router.get('/', async (req, res) => {
  try {
    const tests = await TestModel.find({});
    res.status(200).json({ data: tests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
