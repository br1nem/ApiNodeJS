'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexión establecida con éxito.")

        //Creación del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en url localhost: 3700");
        })
    })
    