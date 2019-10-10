const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservaSchema = new Schema({
    numero: {type: Number , require: true},
    nombreHabitacion: {type: String, require: true},
    numeroHabitacion: {type: Number, require: true},
    ingreso: {type: Number, require: true},
    salida: {type: Number, require: true},
    monto: {type: Number, require: true}
});

module.exports = mongoose.model('reserva', reservaSchema);