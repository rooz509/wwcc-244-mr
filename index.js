const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('./dist'));

//node index.js --> 127.0.0.1:8000
app.listen(port, () => console.log('ready'));