# SWI_ej fivhero.game continue una funcion q ahora mismo se esta invocando desde el jeugo Snake cuanod se termina la partida. MOdifique esa funcion para q se envie tanto la puntuacion final  q ha conseguido el jugador como el nombre del juego a la ruta /games 
games = {};

games.data = {};


module.exports = games;

const bcrypt = require('bcrypt');

users = {};

users.data = {};

users.generateHash = function(password, callback){
    bcrypt.hash(password, 10, callback);
}

users.comparePass = async function(password, hash){
    return await bcrypt.compare(password, hash);
}

users.register = function (username, password){
    //TODO Añadir comprobaciones sobre username y password
    if(users.data.hasOwnProperty(username)){
        throw new Error (`Ya existe el usuario ${username}.`);
    }
    users.generateHash(password, function(err, hash){
        if(err){
            throw new Error (`Error al generar el hash de ${username}.`);
        }
        users.data[username] = {username, hash, last_Login: new Date().toISOString,games}
    });
}

users.isLoginRight = async function(username,password){
    if(!users.data.hasOwnProperty(username)){
        return false;
    }
    return await users.comparePass(password, users.data[username].hash);
}

module.exports = users;const database = {};

database.users = require('./models/user.model');
database.games = require('./models/game.model');

function initializeUsers(){
    const NAMES = ["admin", "user", "bob", "ana"];
    NAMES.forEach((username) => {
        database.users.register(username, "1234");
    });
}

function initializeDB(){
    initializeUsers();
    console.log("Base de datos inicializada");
}

initializeDB();

module.exports = database;

snake.jsfivhero.game continue una funcion q ahora mismo se esta invocando desde el jeugo Snake cuanod se termina la partida. MOdifique esa funcion para q se envie tanto la puntuacion final  q ha conseguido el jugador como el nombre del juego a la ruta /games // Code based on:
// https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4
const canvas = document.getElementById('game_snake');
const context = canvas.getContext('2d');
context.fillStyle = "#000000";
context.fillRect(0, 0, canvas.width, canvas.height);
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}

const STATES = Object.freeze({
    Initial: 0,
    Playing: 1,
    End: 2
});


fivhero.game continue una funcion q ahora mismo se esta invocando desde el jeugo Snake cuanod se termina la partida. MOdifique esa funcion para q se envie tanto la puntuacion final  q ha conseguido el jugador como el nombre del juego a la ruta /games 


let gameState = STATES.Initial;
const grid = 16;

let count = 0;
let score = 0;
let start_time = 0;
  
let snake = {};
let apple = {};

function resetGame(){
  gameState = STATES.Initial;
  snake = {
    x: 160,
    y: 160,
    
    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
    
    // keep track of all grids the snake body occupies
    cells: [],
    
    // length of the snake. grows when eating an apple
    maxCells: 4
  };
  apple = {
    x: 320,
    y: 320
  };
  count = 0;
  score = 0;
  start_time = document.timeline.currentTime;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function step(timestamp) {
  requestAnimationFrame(step);
  if(gameState === STATES.Initial){

  } else if(gameState === STATES.End){
    
  } else {
    if (start_time === undefined) {
      start_time = timestamp;
    }
    const elapsed = timestamp - start_time;
    // ms of a frame
    if (elapsed < 100) {
      return;
    }
    start_time += 100;

    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);
    
    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;

    // wrap snake position horizontally on edge of screen
    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
      snake.x = 0;
    }
    
    // wrap snake position vertically on edge of screen
    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
      snake.y = 0;
    }

    // keep track of where snake has been. front of the array is always the head
    snake.cells.unshift({x: snake.x, y: snake.y});

    // remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }

    // draw apple
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid-1, grid-1);

    // draw snake one cell at a time
    context.fillStyle = 'black';
    snake.cells.forEach(function(cell, index) {
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid-1, grid-1);  

      // snake ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        score += 9;
        snake.maxCells++;

        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }

      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake.cells.length; i++) {
        // snake occupies same space as a body part.
        // GAME END
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          gameState = STATES.End;
          context.font = "40px Arial";
          context.fillText("Game Over!",35,80);
          context.fillText("Score: " + score,35,130);
          context.fillText("Press click to start",35,180);
          sendScore("Snake", score);
        }
      }
    });
    context.font = "16px Arial";
    context.fillText("Score: " + score,300,390);
  }
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  if(gameState !== STATES.Playing){
    return;
  }
  // left arrow key / A
  if ((e.which === 37 || e.which === 65) && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key / W
  else if ((e.which === 38 || e.which === 87) && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key / D
  else if ((e.which === 39 || e.which === 68) && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key / S
  else if ((e.which === 40 || e.which === 83) && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

canvas.addEventListener('click', function(e) {
  if(gameState === STATES.Initial || gameState === STATES.End){
    resetGame();
    gameState = STATES.Playing;
  }
});


context.font = "40px Arial";
context.fillText("Press click to start",35,180);
requestAnimationFrame(step);
game.jsvar express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('games', { user: req.session.user},games.data= req.session.games);
});

module.exports = router;
game_snake.js
 
<%- include("header", {js_snake:true}) %>
<%- include("navbar", {}) %>
<div class="container">
  <h1>Snake</h1>
  <p>Instrucciones:</p>
  <p>Usa las flechas o WASD para mover la serpiente.</p>
  <p>Intenta coger la mayor cantidad de manzanas sin chocarte.</p>
  <canvas width="400" height="400" id="game_snake"></canvas>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Jugador</th>
        <th scope="col">Puntuación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>bob</td>
        <td>108</td>
      </tr>
      <tr class="table-info fw-bold">
        <td>admin</td>
        <td>81</td>
      </tr>
      <tr>
        <td>ana</td>
        <td>54</td>
      </tr>
      <tr>
        <td>user</td>
        <td>9</td>
      </tr>
    </tbody>
  </table>
</div>
<%- include("footer", {}) %>
app
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

let indexRouter = require('./routes/index');
let loginRouter = require('./routes/login');
let gamesRouter = require('./routes/games');
let gameSnakeRouter = require('./routes/game_snake');

let app = express();

app.locals.title = "Gaming!";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "El string que queráis",
  resave: false,
  saveUninitialized: true
}));
app.use((req,res,next) => {
  const message = req.session.message;
  const error = req.session.error;
  delete req.session.message;
  delete req.session.error;
  res.locals.message = "";
  res.locals.error = "";
  if(message){res.locals.message = `<p>${message}</p>`};
  if(error){res.locals.error = `<p>${error}</p>`};
  next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/games', checkLogin, gamesRouter);
app.use('/gameSnake', checkLogin, gameSnakeRouter);
app.use('/logout', (req,res) => {
  req.session.destroy();
  res.redirect('/');
});

//Comprobar si el usuario ha iniciado sesión
function checkLogin(req, res, next){
  if(req.session.user){
    next();
  } else {
    res.redirect('login');
  }
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
nav 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><%= title %></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <% if (user) {%>
          <li class="nav-item">
          <a class="nav-link" href="/games">Games</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/logout">Logout</a>
          </li>
        <% } else {%>
          <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
        <% } %>
      </ul>
      <% if (user) {%>
          <div>Welcome <%= user.username %>!</div>
      <% } %>
    </div>
  </div>
</nav>
log.ejs
<%- include("header", {}) %>
<%- include("navbar", {}) %>
<div class="container">
  <h1>LOGIN</h1>
  <form action="/login" method="post">
    <div class="mb-3">
      <label for="user">Username</label>
      <input type="text" class="form-control" name="user" id="user" placeholder="Username">
      <small class="form-text text-muted">We'll never share your data with anyone else.</small>
    </div>
    <div class="mb-3">
      <label for="pass">Password</label>
      <input type="password" class="form-control" name="pass" id="pass" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
<%- include("footer", {}) %>

