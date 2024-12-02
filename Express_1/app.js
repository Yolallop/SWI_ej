const express = require('express');
const session = require('express-session');
const loginRoutes = require('./routes/login');       // Rutas de login
const registerRoutes = require('./routes/register'); // Rutas de registro
const dashboardRoutes = require('./routes/dashboard'); // Ruta protegida
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true })); // Procesa formularios
app.use(session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 } // La sesión expira en 1 minuto
}));




// Otras configuraciones y rutas...


// Registra la ruta


// Otras configuraciones y rutas...

app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', dashboardRoutes);


module.exports = app;
