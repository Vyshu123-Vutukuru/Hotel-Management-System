// Room routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List of rooms' });
});

router.post('/book', (req, res) => {
    res.json({ message: 'Room booked successfully' });
});

module.exports = router;