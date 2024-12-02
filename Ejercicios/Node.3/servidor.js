const http = require('http');


const palabras = ['H&M', 'Zara', 'Uniqlo', 'Nike', 'Adidas'];


function generarContraseña(cantidad) {
  let resultado = [];
  for (let i = 0; i < cantidad; i++) {
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    resultado.push(palabra);
  }
  return resultado.join('-'); 
}


const server = http.createServer((req, res) => {

  const X = new URL(req.url, `http://${req.headers.host}`).searchParams.get('X');
  const cantidad = parseInt(X) || 2; 


  const contraseña = generarContraseña(cantidad);
  res.end('Contraseña es: ${contraseña}');
});

server.listen(3000, () => console.log('Servidor en http://localhost:3000'));
