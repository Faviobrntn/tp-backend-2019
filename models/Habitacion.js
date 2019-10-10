const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitacionSchema = new Schema({
    numero: {type: Number , require: true},
    nombre: {type: String, require: true},
    capacidad: {type: Number, require: true},
    precio: {type: Number, require: true}    
});

module.exports = mongoose.model('habitacion', habitacionSchema);