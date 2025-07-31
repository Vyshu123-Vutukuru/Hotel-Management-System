const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows requests from your frontend
app.use(express.json()); // Allows parsing of JSON in request bodies

// --- Mock Data ---
const rooms = [
    { id: 1, name: 'Palace Deluxe Room', price: 15000, availability: 5 },
    { id: 2, name: 'The Royal Suite', price: 35000, availability: 2 },
    { id: 3, name: 'Heritage Room', price: 12000, availability: 10 }
];

// --- API Routes ---

// Get all rooms
app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

// Simulate a booking
app.post('/api/bookings', (req, res) => {
    const { roomId, checkin, checkout, guests } = req.body;

    // Basic validation
    if (!roomId || !checkin || !checkout || !guests) {
        return res.status(400).json({ message: 'Missing booking details.' });
    }

    const room = rooms.find(r => r.id == roomId);
    if (!room) {
        return res.status(404).json({ message: 'Room not found.' });
    }
    
    if (room.availability > 0) {
        // In a real app, you would decrease availability and save to a database.
        console.log('Booking received:', req.body);
        res.status(201).json({ 
            success: true, 
            message: Booking confirmed for ${room.name}.,
            bookingId: BK-${Date.now()} 
        });
    } else {
        res.status(409).json({ success: false, message: 'Sorry, the selected room is not available.' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
