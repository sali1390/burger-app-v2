var db = require("../models/");

module.exports = function(app){
    app.get('/', function (req, res) {
        db.Burger.findAll({}).then(function(dbBurger){
            res.render("index", {burgers: dbBurger})
        })
	});
    
    app.post('/', function(req, res){
        db.Burger.create({burger_name: req.body.newBurger})
            .then(function(dbBurger){
            res.redirect("/")
        })
    })
    
    app.post('/eat/:id', function(req, res){
        db.Burger.update({devoured: 1},
            {where: {
                id: req.params.id
                }
            }
        ).then(function(dbBurger){
            res.redirect("/")
        })
    })
    
    app.post('/throwup/:id', function(req, res){
        db.Burger.update({devoured: 0},
            {where: {
                id: req.params.id
                }
            }
        ).then(function(dbBurger){
            res.redirect("/")
        })
    })
}