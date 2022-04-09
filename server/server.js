//iniciar el servidor 
const { application } = require('express');
const express = require('express');

const app = express();
const PORT = 5005;

app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}` )
})

// CORS
const cors = require('cors')
app.use(cors())

//conectamos a la BD
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/garaje-live-coding')
    .then(() => console.log("Conectado a GarajeDB"))
    .catch( error => console.log(`Error al conecta con la BD ${error}`))

//ruta de ejemplo para enviar un JSON como respuesta
app.get("/productos", (req, res) => {
    res.json({
        "mensaje": "Api Productos en formato json",
        "fecha" : new Date()
    })
})

// importamos el MOdel para poder generar el endPoint de Coasters
const Coasters = require('./Models/Coaster.model')

// Creamons un endPoint para obtener las montañas rusa 'Coasters'
app.get('/api/coasters', (req, res) => {
    Coasters
        .find()
        .then( allCoasters => res.json(allCoasters))
})

// Creamos un endPoint para buscar una montaña rusa
app.get('/api/details/:coaster_id', (req, res) => {
    const {coaster_id} = req.params
    Coasters
        .findById(coaster_id)
        .then( coaster => res.json(coaster))
})