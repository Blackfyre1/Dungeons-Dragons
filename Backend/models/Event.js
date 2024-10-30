const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    difficulty: Number,  // e.g., a scale from 1-10
    outcome: String,     // e.g., 'success', 'failure'
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
