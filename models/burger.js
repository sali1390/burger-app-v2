var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Burger = sequelize.define("burger", {
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

Burger.sync();

module.exports = Burger;
    