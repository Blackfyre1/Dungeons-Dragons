const express = require('express');
const Enemy = require('../models/Enemy');

const router = express.Router();

// Route to create a new enemy
router.post('/', async (req, res) => {
    try {
        const newEnemy = new Enemy(req.body);
        const savedEnemy = await newEnemy.save();
        res.status(201).json(savedEnemy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
