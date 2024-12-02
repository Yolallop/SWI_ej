
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login'); 

const restrictedRouter = require('./routes/restricted'); 
const app = express();

app.use('/restricted', restrictedRouter); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 


app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs'); 


app.use(express.static(path.join(__dirname, 'public'))); 


app.use('/', indexRouter);
app.use('/login', loginRouter); 



app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});


module.exports = app;
