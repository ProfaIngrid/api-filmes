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

router.delete("/id", (req, res) =>{
    const {id} = req.body;
    const query = 'delete from filmes where id = ?';

    dbConecta.query(query, [id], (err) =>{
        if(err) throw err;
        res.json({
            mensagem: 'Filme excluído com sucesso',
            body:req.body
        });

        
    });
});

router.delete('/tmdb/:id', (req, res) => {
    const id = req.params.id;
    const query = 'delete from filmes where tmdb_id = ?';

    dbConecta.query(query, [id], (err) => {
        if (err) {
            throw err;
        }

        res.send(`Filme tmdbID ${id} excluído com sucesso.`);
    });
});


module.exports = router;




