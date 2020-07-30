const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroesController');

router.get('/', controller.index);

router.get('/:id/profesion', controller.profesion);

router.get('/:id/resenia/:tipo?', controller.resenia);

module.exports = router;