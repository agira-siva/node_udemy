const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title, price: req.body.price, description: req.body.Description});
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
