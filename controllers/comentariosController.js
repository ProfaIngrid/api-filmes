const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    const query = `
        select
            u.username, 
            f.tmdb_id,
            c.*
        from
            comentarios c
        inner join usuarios u ON 
            c.filme_id = u.id 
        inner join filmes f on 
            c.filme_id  = f.id
    `
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.delete("/",(req,res)=>{
    const {id} = req.body;
    const query = `delete from comentarios where id = ?`;
    dbConecta.query(query,[id],(err,results)=>{
        if(err) throw err;
        res.json({
            mensagem: "Comentario excluido com Sucesso",
            body: req.body
        });
    });
});

module.exports = router;