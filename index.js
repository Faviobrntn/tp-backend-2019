const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 5000);

// BASE DE DATOS
const { mongoose } = require('./models/db');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
// app.use(cors());
app.use(cors({origin: 'http://localhost:4200'}));


// RUTAS
app.use(require('./routes/index.routes'));



app.listen(app.get('port'), () => {
    console.log('Servidor backend corriendo en el puerto: ', app.get('port'));
});