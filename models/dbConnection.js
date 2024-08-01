//importando a ferramenta que vai me conectar ao banco de dados
const mysql = require("mysql");
const name_db =  "db_filmes";

const conecta = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: name_db
});

conecta.connect((err)=> {
    err ? console.log(`Erro ao conectar ao banco: ${err}`) : "";
    console.log(`Banco ${name_db} conectado com sucesso!`);
});

module.exports = conecta;
