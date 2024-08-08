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

module.exports = router;