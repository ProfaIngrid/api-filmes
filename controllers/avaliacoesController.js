const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `
        select
            u.username, 
            a.*
        from
            avaliacoes a
        inner join usuarios u on
            a.usuario_id = u.id
    ` 
    dbConecta.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.delete('/', (req, res) => {
    const {id} = req.body;
    const query = 'delete from avaliacoes where id = ?';

    dbConecta.query(query, [id], (err) => {
        if (err) throw err;
        res.json ({
            mensagem : "Avaliação deletada com sucesso", 
            body: req.body 
        });
    });
});

router.put('/', (req, res) => {
    const {nota, usuario_id, filme_id} = req.body;
    const query = 'update avaliacoes set nota = ?, criado_em = CURRENT_TIMESTAMP() where usuario_id = ? and filme_id = ?';
    
    dbConecta.query(query, [nota, usuario_id, filme_id], (err) => {
        if (err) throw err;
        res.json({
            mensagem: "Avaliação atualizada com sucesso",
            body: req.body
        });
    });
});

module.exports = router;

