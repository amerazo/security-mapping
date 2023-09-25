// SET UP
require('dotenv').config(); 
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const db = require('./models');
const app = express();
app.use(methodOverride('_method'));


// IMPORT THE CONTROLLERS
const threatController = require('./controllers/threatController');

//MIDDLEWARE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//TEST HOME ROUTE
// http://localhost:2000/
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// USE THE CONTROLLERS
app.use('/', threatController);

//SUPPORT
//http://localhost:2000/support
app.get('/support', (req, res) => {
  res.render('support'); 
});

//PORT CALL OUT
app.listen(process.env.PORT, function () {
  console.log('LISTENING ON PORT', process.env.PORT);
});
