const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const query = 'Select * from filmes';
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        // res.send(`Conexão deu certo!`);
        res.json(results);
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const query = 'select * from filmes where id = ?';
    dbConecta.query(query, [id], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});


module.exports = router;


/*
crie as requisições para trazer: 
    --> Todos os usuários (/usuarios)
    --> Os usuarios por username (/usuarios/:username)

Crie as requisições para trazer: 
    --> Todas as avaliações feitas com o nome do usuario que a fez.
*/





