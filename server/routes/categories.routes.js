const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/categories.controller');

router.get('/categories', CategorieController.getAll);

module.exports = router;
