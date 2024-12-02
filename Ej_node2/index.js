const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  let body = ''; // Variable para acumular los datos recibidos

  // Evento que se activa cada vez que llega un pedazo de datos
  req.on('data', chunk => {
    body += chunk; // Agregamos cada pedazo a la variable body
  });

  // Evento que se activa cuando terminamos de recibir los datos
  req.on('end', () => {
    console.log(`Datos recibidos: ${body}`); // Mostramos los datos en la consola
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Datos recibidos con éxito');
  });
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
