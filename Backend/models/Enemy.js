const mongoose = require('mongoose');

// Define a schema for your collection
const enemySchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Create a model based on the schema
const Enemy = mongoose.model('Enemy', enemySchema);

module.exports = Enemy;
