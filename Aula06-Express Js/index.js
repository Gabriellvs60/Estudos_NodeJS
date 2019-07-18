const express = require("express");
const app = express();
//const evita que voce sobreescreva a variável.

//A rota é o caminho pra aplicação...
app.get("/", function(req, res){
    res.send("Seja Bem vindo ao meu app!");
});

//rotas...
app.get("/Sobre", function(req, res){
    res.send("Minha página sobre");
});

//requisição e resposta
app.get("/blog", function(req, res){
    res.send("Bem Vindo ao meu blog!");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url")
});
