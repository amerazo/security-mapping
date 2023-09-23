// LOAD ENV VARIABLES FROM .ENV FILE
require('dotenv').config(); 

//SET UP
const express = require('express');
const app = express();
const port = process.env.PORT 

//TEST HOME ROUTE
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//PORT CALL OUT
app.listen(port, () => {
  console.log(`RUNNING SERVER ON PORT... ${port}`);
});
