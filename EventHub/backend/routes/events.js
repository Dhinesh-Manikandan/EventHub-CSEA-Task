const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET /api/events - Fetch all events or filter by domain
router.get('/', async (req, res) => {
  try {
    const { domain } = req.query;
    let query = {};
    
    if (domain) {
      query.domain = domain;
    }
    
    const events = await Event.find(query).sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error: error.message });
  }
});

// GET /api/events/:id - Fetch details of a specific event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
});

// POST /api/events - Add a new event (for admin usage)
router.post('/', async (req, res) => {
  try {
    const { name, description, date, domain } = req.body;
    
    if (!name || !description || !date || !domain) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newEvent = new Event({
      name,
      description,
      date: new Date(date),
      domain
    });
    
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error: error.message });
  }
});

module.exports = router;
