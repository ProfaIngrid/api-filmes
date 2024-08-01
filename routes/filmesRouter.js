const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');

router.use('/filmes', filmesController);

module.exports = router;