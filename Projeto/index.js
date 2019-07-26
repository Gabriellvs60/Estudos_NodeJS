const express = require("express");
const app = express();
const handlebars = require('express-handlebars')

//Conexão com o BD Mysql
const sequelize = new Sequelize ('test','root','password', {
    host: "localhost",
    dialect: 'mysql'
})
//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    app.get('/cad', function(req, res){
        res.render('formulario')
    })

app.listen(8081, function(){
    console.log("Servidor Rodando na url")
});
