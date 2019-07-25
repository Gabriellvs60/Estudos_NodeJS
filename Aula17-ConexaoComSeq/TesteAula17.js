const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('test','root','password', {
    host: "localhost",
    dialect: 'mysql'
})

/* sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
}) */

//Postagem
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Lagoinha",
    conteudo: "Lagoinha Azul da Cor do Mar"
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
       type: Sequelize.STRING 
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Gabriel",
    sobrenome: "Lima",
    idade: 20,
    email: "blabla"
})
//Usuario.sync({force:true})