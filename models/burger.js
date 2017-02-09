var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Burgers = sequelize.define("burgers", {
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Burgers;
    