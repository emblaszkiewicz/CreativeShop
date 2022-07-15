const Categorie = require('../models/categories.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Categorie.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
