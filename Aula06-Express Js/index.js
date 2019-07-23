const express = require("express");
const app = express();
//const evita que voce sobreescreva a variável.

//A rota é o caminho pra aplicação...
app.get("/", function(req, res){
    //dirname retorna o diretorio absoluto do app
    res.sendFile(__dirname + "/html/ind.html");
});

//rotas...
app.get("/Sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");;
});

//requisição e resposta
app.get("/blog", function(req, res){
    res.send("Bem Vindo ao meu blog!");
});

//Aula 08 parametros
app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola " + req.params.nome+ "</h1>"  
    + "<h2>Seu cargo e " + req.params.cargo + "</h2>"
    + "<h3>Sua cor escolhida e " + req.params.cor + "</h3>"
    );
   
});
//o req é responsavel por receber dados de uma requisição
//http://localhost:8081/ola/prof/adao/red

app.listen(8081, function(){
    console.log("Servidor Rodando na url")
});
