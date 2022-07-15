const Brand = require('../models/brands.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Brand.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
