const express = require('express');
const router = express.Router();

// Middleware para proteger rutas
const restrict = (req, res, next) => {
    if (req.session.user) {
        next(); // Permite el acceso si hay una sesión activa
    } else {
        res.redirect('/login'); // Redirige al login si no está autenticado
    }
};

// Ruta protegida para el dashboard
router.get('/', restrict, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

module.exports = router;
