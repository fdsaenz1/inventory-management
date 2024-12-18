const express = require('express');
const connectDB = require('./utils/db');
const productRoutes = require('./routes/productRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const movementRoutes = require('./routes/movementRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/movements', movementRoutes);

app.use(errorHandler);

module.exports = app;
