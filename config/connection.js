var Sequelize = require('sequelize');

var sequelize = new Sequelize('cl702kb9icfpzwxt', 'tt18wa40ohx2ft2z', 'hxpd6o1g5zizlir4', {
    host: 'ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

module.exports = sequelize;