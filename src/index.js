require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res)=>{
    res.send('you are on twitter page');
});

app.get('/facebook', (req, res)=>{
    res.send('you are on facebook page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})