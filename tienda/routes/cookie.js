const express = require('express');
const router = express.Router();

// Ruta para aceptar las cookies
router.post('/cookie', (req, res) => {
    res.cookie('cookiesAccepted', 'true', { maxAge: 1000 * 60 * 60 * 24 * 365 }); // Cookie válida por 1 año
    res.send({ message: 'Cookies aceptadas' });
});

// Exportar el router
module.exports = router;
