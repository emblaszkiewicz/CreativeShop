const mongoose = require('mongoose');

const orderShema = new mongoose.Schema({});

module.exports = mongoose.model('Order', orderShema);
