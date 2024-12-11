/*
├── expense-tracker/
│   ├── backend/
│   │   ├── package.json
│   │   ├── app.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── transactions.js
│   │   ├── models/
│   │   │   ├── db.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   ├── database.sql
│   │   ├── .env
│   ├── frontend/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── css/
│   │   │   ├── style.css
│   │   ├── js/
│   │   │   ├── auth.js
│   │   │   ├── transactions.js
*/


/** Backend - app.js */
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');
const db = require('./models/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses JSON requests

// Routes
app.use('/auth', authRoutes);
app.use('/transactions', transactionRoutes);

// Database Connection
(async () => {
    try {
        await db.getConnection();
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

