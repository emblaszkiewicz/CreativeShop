const mongoose = require('mongoose');

const brandShema = new mongoose.Schema({
  image: { type: String, required: true },
});

module.exports = mongoose.model('Brand', brandShema);
