/** Routes **/

// routes/transactions.js
const express = require('express');
const pool = require('../models/db');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Fetch all transactions
router.get('/', authenticateToken, async (req, res) => {
    try {
        const [transactions] = await pool.query('SELECT * FROM transactions WHERE userId = ?', [req.user.id]);
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
});

// Create a new transaction
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { type, category, amount, description, date } = req.body;

        const [result] = await pool.query(
            'INSERT INTO transactions (userId, type, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)',
            [req.user.id, type, category, amount, description, date]
        );

        res.status(201).json({ message: 'Transaction created successfully', transactionId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create transaction' });
    }
});

module.exports = router;
