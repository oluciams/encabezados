'use strict'

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    let header = req.headers['user-agent']
    res.send(`<p>El navegador es: ${header}`);
});


app.listen(3000, () => console.log('Listening on port 3000!'));

