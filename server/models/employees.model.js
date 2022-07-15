const mongoose = require('mongoose');

const employeeShema = new mongoose.Schema({
  department: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  linkedin: { type: String, required: true },
  facebook: { type: String, required: true },
  instagram: { type: String, required: true },
  twitter: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeShema);
