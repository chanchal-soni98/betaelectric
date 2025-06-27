import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
