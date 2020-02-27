'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas


//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
app.get('/', (req, resp) => {
    resp.status(200).send(
        "<h1>API con NodeJS</h1>"
    );
});

app.get('/test', (req, resp) => {
    resp.status(200).send({
        message: "Probado mi API de NodeJS"
    })
});
//exportar
module.exports = app;