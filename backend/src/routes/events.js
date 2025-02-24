import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String
});

const Event = mongoose.model('Event', EventSchema);

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

export default router;
