const express = require('express');
const router = express.Router();

// Definir una ruta básica para /users
router.get('/', (req, res) => {
  res.send('Página de usuarios');
});

module.exports = router;
