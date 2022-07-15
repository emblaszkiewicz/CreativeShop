const Employee = require('../models/employees.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find());
  }
  catch (err) {
    res.status(500).json({ message: err });
  }
};
