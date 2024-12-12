var express = require('express');
var router = express.Router();
const users = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'registro', user: req.session.user});

});
router.post('/', function(req, res, next){
    let user= req.body.user; 
    let pass = req.body.pass; 
    let confirmPass =req.body.confirmPass;
  if(pass.length >= 8 && pass === confirmPass){
     
    if (!users[user]){
      users.registro(user, pass, function() {
        req.session.user = { username: user };
        req.session.message = "¡Usuario registrado con éxito!";
        res.redirect('/restricted'); // Redirige a una página protegida
    });
    
    }
    else {
      req.session.error = "El usuario ya existe";
      res.redirect("/registro");
    }

  }
});
module.exports = router;