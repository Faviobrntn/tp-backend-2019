const mongoose = require('mongoose');

const URI = 'mongodb://localhost/TP-Backend';

mongoose.connect(URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("Conectado a la DB"))
    .catch(err => console.error(err));

module.exports = mongoose;