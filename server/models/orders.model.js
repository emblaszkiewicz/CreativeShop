const mongoose = require('mongoose');

const orderShema = new mongoose.Schema({
  message: { type: String, required: true },
  products: [
    {
      amount: { type: String, required: true },
      id: { type: String, required: true },
      image: { type: String, required: true },
      name: { type: String, required: true },
      singlePrice: { type: String, required: true },
      size: { type: String, required: true },
      totalPrice: { type: String, required: true },
    },
  ],
  shippingAddress: [
    {
      city: { type: String, required: true },
      name: { type: String, required: true },
      phone: { type: String, required: true },
      street: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Order', orderShema);
