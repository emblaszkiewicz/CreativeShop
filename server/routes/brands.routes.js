const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/brands.controller');

router.get('/brands', BrandController.getAll);

module.exports = router;
