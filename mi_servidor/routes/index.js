const express = require ('express');
const router= express.Router(); 

router.get('/', (req, res)=>{
    const items = ['Element 1', 'Element 2 ', 'Element 3']; 
    res.render ('index'
        , {title: 'Pagina Principal ',
            items,
        })
})


module.exports= router; 
