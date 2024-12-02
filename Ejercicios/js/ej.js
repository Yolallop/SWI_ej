const dictionary = [
    "libertad", "explorador", "océano", "biblioteca", "constelación",
    "arquitectura", "espejismo", "paralelo", "cuarzo", "galaxia",
    "dinámica", "criptografía", "algoritmo", "fenómeno", "quimera",
    "horizonte", "virtud", "paradigma", "utopía", "revelación",
    "nebulosa", "zenith", "afable", "luminoso", "criptico",
    "silueta", "vanguardia", "perspectiva", "anomalía", "sinergia"
];

function generatePassword(){
    const numwords =document.getElementById("pa").value; 
    let password ='';
    for (let i=0; i< numwords; i++){
        password += dictionary[Math.floor(Math.random() * dictionary.length)] + " ";
    }
    document.getElementById("passwordDisplay").textContent = 'La contraseña generada es: ' + password;

}