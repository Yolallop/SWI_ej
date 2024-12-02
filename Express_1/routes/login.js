const express = require('express');
const router =express.Router();
const users = require('../database/user.model.js'); // Importa el modelo

router.get('/', function(req, res,next){
    res.render('login', {title : ' Login'});
})
router.post('/', async function(req, res) {
  const { username, password } = req.body;

  try {
      const isValid = await users.isLoginRight(username, password);
      if (isValid) {
          req.session.user = { username }; // Almacena el usuario en la sesión
          res.redirect('/dashboard');     // Redirige al dashboard
      } else {
          res.status(401).send('Credenciales incorrectas');
      }
  } catch (err) {
      res.status(500).send('Error del servidor');
  }
});

module.exports = router;