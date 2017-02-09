var Sequelize = require('sequelize');

var sequelize = new Sequelize('burgers_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;