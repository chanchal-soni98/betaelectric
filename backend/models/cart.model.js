import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
  discount: { type: Number, default: 0 },
  price: { type: Number, required: true }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 },
  totalDiscount: { type: Number, default: 0 }
});

export default mongoose.model('Cart', cartSchema);
