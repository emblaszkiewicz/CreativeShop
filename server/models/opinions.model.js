const mongoose = require('mongoose');

const opinionShema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Opinion', opinionShema);
