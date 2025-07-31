// Express Backend for Hotel Management System
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const roomRoutes = require('./routes/rooms');
const billingRoutes = require('./routes/billing');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/billing', billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));