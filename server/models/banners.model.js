const mongoose = require('mongoose');

const bannerShema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Banner', bannerShema);
