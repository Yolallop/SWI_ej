
const dictionary = [
    "algoritmos", "basesDeDatos", "redes", "programacion", "seguridad", 
    "arquitecturaComputadores", "inteligenciaArtificial", "sistemasOperativos", 
    "ingenieriaSoftware", "criptografia", "compiladores", "matematicaDiscreta", 
    "visionArtificial", "mineriaDatos", "desarrolloWeb", "ciberseguridad"
];
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function generatePassword() {
    let numero = parseInt(document.getElementById("WordCount").value);
    if (numero  < 1 || numero > 10) {
        alert(" Eliga un numero  1 y 10.");
        return;
    }

    let words = new Set();
    let password = '';


    while (words.size < numero) {
        let randomIndex = Math.floor(Math.random() * dictionary.length);
        let word = dictionary[randomIndex];

        
        if (!words.has(word)) {
            words.add(word);
            password += capitalize(word);
        }
    }

    document.getElementById("passwordDisplay").innerHTML = 
        "La contraseña generada es: " + password;
}

