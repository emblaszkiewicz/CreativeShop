const Order = require('../models/orders.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.sendOrder = async (req, res) => {};
