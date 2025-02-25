import express from 'express';

const router = express.Router();

const logs = [
  { id: 1, timestamp: '2025-02-25T17:00:45.182Z', message: 'Log 1' },
  { id: 2, timestamp: '2025-02-26T17:00:45.182Z', message: 'Log 2' }
];

router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  res.json(logs.slice(0, limit));
});

export default router;
