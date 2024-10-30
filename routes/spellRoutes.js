const express = require('express');
const Spell = require('../models/Spell');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newSpell = new Spell(req.body);
        const savedSpell = await newSpell.save();
        res.status(201).json(savedSpell);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const spells = await Spell.find();
        res.json(spells);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
