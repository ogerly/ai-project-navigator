import express from 'express';

const router = express.Router();

const events = [
  { id: 1, date: '2025-02-25', title: 'Event 1' },
  { id: 2, date: '2025-02-26', title: 'Event 2' }
];

router.get('/', (req, res) => {
  res.json(events);
});

export default router;
