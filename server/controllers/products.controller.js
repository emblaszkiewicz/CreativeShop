const Product = require('../models/products.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find().populate('category'));
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
