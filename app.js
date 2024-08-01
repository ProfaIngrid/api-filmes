const express = require('express'); //importa o express
const app = express(); //inicializa o express
const dbConecta = require('./models/dbConnection');
const port = 3000;

app.get("/", (req, res) => {
    res.send("Deu bom :) !");
});

app.get("/testedb", (req, res) => {
    const query = 'Select * from filmes';
    dbConecta.query(query, (err, results) => {
        res.send(`Conexão deu certo!`);
    });
});


//configurando a porta do server
app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
});

