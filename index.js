require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const characterRoutes = require('./routes/characterRoutes');
const itemRoutes = require('./routes/itemRoutes');
const weaponRoutes = require('./routes/weaponRoutes');
const eventRoutes = require('./routes/eventRoutes');
const spellRoutes = require('./routes/spellRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Failed to connect to MongoDB Atlas', err));

// Routes
app.use('/characters', characterRoutes);
app.use('/items', itemRoutes);
app.use('/weapons', weaponRoutes);
app.use('/events', eventRoutes);
app.use('/spells', spellRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
