const express = require('express');
const router = express.Router();
const filmesController = require('../controllers/filmesController');
const usuariosController = require('../controllers/usuariosController');
const avaliacoesController = require('../controllers/avaliacoesController');
const comentariosController = require('../controllers/comentariosController');

router.use('/filmes', filmesController);
router.use('/usuarios', usuariosController);
router.use('/avaliacoes', avaliacoesController);
router.use('/comentarios', comentariosController);


module.exports = router;