const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
//Conexão com o BD Mysql
const sequelize = new Sequelize ('test','root','password', {
    host: "localhost",
    dialect: 'mysql'
})
//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //body parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())
    
    //Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    app.post('/add', function(req,res){
        //pegando os dados do form.body
        res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
    })

app.listen(8081, function(){
    console.log("Servidor Rodando na url")
});
