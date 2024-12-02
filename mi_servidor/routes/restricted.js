const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth'); 


router.get('/', isAuthenticated, (req, res) => {
  res.render('restricted', { title: 'Página Restringida' });
});

module.exports = router;