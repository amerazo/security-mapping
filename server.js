// LOAD ENV VARIABLES FROM .ENV FILE
require('dotenv').config(); 

//SET UP
const express = require('express');
const app = express();
const port = process.env.PORT 
const db = require('./models');
const threatSeedData = require('./models/seed');

//TEST HOME ROUTE
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// DISPLAY SEED DATA
app.get('/seed-data', (req, res) => {
  res.json(threatSeedData);
});

//PORT CALL OUT
app.listen(port, () => {
  console.log(`RUNNING SERVER ON PORT... ${port}`);
});
