const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require("./admin.js");

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.render("shop", {products : adminData.products});
});

module.exports = router;
