const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    level: Number,
    health: Number,
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;
