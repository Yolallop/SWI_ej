const express = require('express');
const users = require('../database/user.model.js'); // Importa el modelo
const router = express.Router();
router.get('/', function(req, res,next){
    res.render('register', {title : 'registro'});
})

// Ruta para registrar usuarios
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        await users.register(username, password);
        res.redirect('/login'); // Redirige al login después del registro
    } catch (err) {
        res.status(400).send(err.message); // Muestra un error si el usuario ya existe
    }
});

module.exports = router;
