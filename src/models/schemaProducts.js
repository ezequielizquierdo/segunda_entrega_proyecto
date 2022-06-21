const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  title: { type: String, require: true, max: 100 },
  category: { type: String, require: true, max: 100 },
  price: { type: String, require: true, max: 100 },
  thumbnail: { type: String, require: true, max: 100 },
  stock: { type: Number, require: true },
  timestamp: { type: String, require: true },
});

module.exports = mongoose.model('products', productsSchema);