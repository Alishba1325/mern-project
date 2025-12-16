const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps:true});
module.exports = mongoose.model('Product', ProductSchema);
