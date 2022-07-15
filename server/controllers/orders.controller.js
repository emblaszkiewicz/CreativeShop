const Order = require('../models/orders.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.sendOrder = async (req, res) => {
  try {
    const { message, products, shippingAddress } = req.body;

    const newOrder = new Order({ message: message, products: products, shippingAddress: shippingAddress });
    await newOrder.save();
    res.json(newOrder);
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
