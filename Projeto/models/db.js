const Sequelize = require('sequelize')

//Conexão com o BD Mysql
const sequelize = new Sequelize ('postapp','root','password', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}