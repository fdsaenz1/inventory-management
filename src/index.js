const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const app = require('./app');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
