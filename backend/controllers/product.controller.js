import Product from '../models/product.model.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required.' });
    }

    const existing = await Product.findOne({ name });
    if (existing) {
      return res.status(409).json({ message: 'Product already exists.' });
    }

    const newProduct = new Product({ name, price });
    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully.', product: newProduct });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
