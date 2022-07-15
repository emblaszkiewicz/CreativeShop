const express = require('express');
const router = express.Router();
const BannerController = require('../controllers/banners.controller');

router.get('/banners', BannerController.getAll);

module.exports = router;
