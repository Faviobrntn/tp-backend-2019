const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    // telefono: { type: Number, required: true },
    //pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pet' }]
}, { timestamps: true });

// mongoose.model('usuarios', userSchema);
module.exports = mongoose.model('usuarios', userSchema);