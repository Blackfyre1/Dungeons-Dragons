const express = require('express');
const Weapon = require('../models/Weapon');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newWeapon = new Weapon(req.body);
        const savedWeapon = await newWeapon.save();
        res.status(201).json(savedWeapon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.json(weapons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
