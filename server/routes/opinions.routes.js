const express = require('express');
const router = express.Router();
const OpinionController = require('../controllers/opinions.controller');

router.get('/opinions', OpinionController.getAll);

module.exports = router;
