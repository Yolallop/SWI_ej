// Diccionario de palabras
const diccionario = [
  "Acrata", "Afaca", "Absit", "Agape", "Babel", "Bruma", "Cifra",
  "Dogma", "Efebo", "Farol", "Gesto", "Hogar", "Isla", "Joven",
  "Karma", "Luz", "Mito", "Noche", "Oculto", "Paz", "Quorum",
  "Rayo", "Sol", "Tinta", "Umbral", "Verbo", "Wafle", "Xenón",
  "Yermo", "Zorro"
];



function generarContrasena(){
  
}








// Función para generar la contraseña
function generarContrasena() {

  const numPalabras = parseInt(document.getElementById("numPalabras").value);
  if (isNaN(numPalabras) || numPalabras < 1 || numPalabras > 10) {
    document.getElementById("resultado").textContent = "Por favor, introduce un número válido entre 1 y 10.";
    return;
  }

  const maxPalabras = Math.min(Math.max(numPalabras, 1), 10); // Limitar entre 1 y 10 primeor hace el parecentesis de max luego entre el q se ascogido el min
  const palabrasUsadas = new Set();
  let contrasena = "";

  while (palabrasUsadas.size < maxPalabras) {
    const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    if (!palabrasUsadas.has(palabra)) { //! invierte si la pabla njo esta en el conjunto esata condicion es true 
      palabrasUsadas.add(palabra);
      contrasena += palabra; //agrega la palabra a la varible ccontraseña 
    }
  }

  document.getElementById("resultado").textContent = `La contraseña generada es: ${contrasena}`;
}

// Agregar el evento al botón
document.getElementById("generarBtn").addEventListener("click", generarContrasena);
