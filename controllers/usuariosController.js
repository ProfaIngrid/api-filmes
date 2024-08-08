const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM USUARIOS';
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.get('/username/:username', (req, res) => {
    const username = req.params.username;
    const query = 'SELECT * FROM USUARIOS WHERE USERNAME = ?';

    dbConecta.query(query, [username], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.get('/email/:email', (req, res) => {
    const email = req.params.email;
    const query = 'SELECT * FROM USUARIOS WHERE EMAIL = ?';

    dbConecta.query(query, [email], (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const {username, email, senha} = req.body;
    const query = `insert into usuarios(username, email, senha) values (?, ?, md5(?));`

    dbConecta.query(query, [username, email, senha], (err) => {
        if (err) throw err;
        res.status(201).json({
            mensagem: 'Usuario criado!',
            body: req.body
        });
    });
});

module.exports = router;