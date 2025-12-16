const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
// GET all products
router.get('/', auth, async (req,res) => {
  const prods = await Product.find().populate('createdBy','name email');
  res.json(prods);
});
// POST create product
router.post('/', auth, async (req,res) => {
  const {title,description,price} = req.body;
  const p = new Product({title,description,price,createdBy:req.user.id});
  await p.save();
  res.json(p);
});
module.exports = router;
