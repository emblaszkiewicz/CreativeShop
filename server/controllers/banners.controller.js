const Banner = require('../models/banners.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Banner.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
