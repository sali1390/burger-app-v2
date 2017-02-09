var db = require("../models/burger.js");

module.exports = function(app){
    app.get('/', function (req, res) {
        db.findAll({}).then(function(dbBurger){
            res.render("index", {burgers: dbBurger})
        })
	});
    
    app.post('/', function(req, res){
        db.create({burger_name: req.body.newBurger})
            .then(function(dbBurger){
            res.redirect("/")
        })
    })
}