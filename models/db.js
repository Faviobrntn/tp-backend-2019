const mongoose = require('mongoose');

const URI = 'mongodb://localhost/nombre_db';

mongoose.connect(URI)
    .then(db => console.log("Conectado a la DB"))
    .catch(err => console.error(err));

module.exports = mongoose;