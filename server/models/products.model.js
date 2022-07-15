const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true, ref: 'Categorie' },
  price: { type: String, required: true },
  image: { type: String, required: true },
  sale: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  sizes: [
    {
      id: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Product', productShema);
