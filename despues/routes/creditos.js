const express = require('express');
const router = express.Router();
const controller = require('../controllers/creditosController');

router.get('/', controller.index);

module.exports = router;