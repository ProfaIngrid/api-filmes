const express = require('express'); //importa o express
const app = express(); //inicializa o express
const port = 3000;
const filmesRouter = require("./routes/filmesRouter");

app.use('/', filmesRouter);

app.get("/", (req, res) => {
    res.send("Deu bom :) !");
});


//configurando a porta do server
app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
});




