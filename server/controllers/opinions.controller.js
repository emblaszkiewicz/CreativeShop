const Opinion = require('../models/opinions.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Opinion.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
