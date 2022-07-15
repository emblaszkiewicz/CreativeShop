const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.controller');

router.get('/banners', OrdersController.getAll);
router.post('/banners', OrdersController.sendOrder);

module.exports = router;
