const express = require('express');
const Character = require('../models/Character');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        const savedCharacter = await newCharacter.save();
        res.status(201).json(savedCharacter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
