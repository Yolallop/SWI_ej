const express = require('express');
const app = express();
let nombre= prompt("cual es tunombre", "joj")
console.log (`Hola, ${nombre}!`);
app.get('/submit', (req, res) => {
    const { firstname, lastname } = req.query;
    res.send(`Recibido por GET: ${firstname} ${lastname}`);
});


app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

