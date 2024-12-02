const express = require ('express');
const router= express.Router(); 

router.get('/', (req, res)=>{
    res.render ('login'
        , {title: 'Pagina de LOGIN ',
        
        })
})
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
      res.send('Inicio de sesión exitoso'); 
    } else {
      res.send('Credenciales incorrectas');
    }
  });

  
module.exports= router; 
