var express = require('express');
var router = express.Router();
const database = require('../database'); // Asegúrate de que este módulo contiene la lista de juegos

// Ruta GET para buscar juego por nombre
router.get('/:name', (req, res) => {
    const gameName = req.params.name.toLowerCase(); // Convierte el nombre a minúsculas para hacer una búsqueda sin distinción de mayúsculas/minúsculas
    
    // Suponiendo que los juegos están almacenados en un array
    const game = Object.values(database.games).find(g => g.name.toLowerCase() === gameName);

    if (!game) {
        return res.status(404).send('Juego no encontrado');
    }

    res.render('gamesDetail', { 
        title: 'Detalles del Juego',
        game: game,
        user: req.session.user
    });
});

module.exports = router;
