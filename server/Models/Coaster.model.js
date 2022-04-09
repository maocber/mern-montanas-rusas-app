//importar mongoose para interatuar con la BDs
const mongoose = require('mongoose')

// Se crea el esquema que se tiene en mongoDB
const coasterSchema = mongoose.Schema({
    title: String,
    description: String,
    inversion: Number,
    length: Number
})

/**
 * Objetivo: se Crea el modelo para manejar en el API
 * Parametros
 *  nombde de la colección
 *  esquema para la colección
 */
const Coaster = mongoose.model( 'coasters', coasterSchema)

// exportar el model para que pueda ser utilizado por los otros objetos de la apliación
module.exports = Coaster