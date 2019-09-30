const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');
const keys = require('./config/keys');

// BASE DE DATOS
// mongoose.connect('mongodb://localhost/nombre_db_mongo');
mongoose.connect(keys.mongoURI);

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(methodOverride());

// MODELOS
//require('./models/Usuarios.js');
// require('./models/pet.js')

// RUTAS
// require('./routes/authRoutes')(app);
app.use(require('./routes/index.routes'));

var router = express.Router();
app.use(router);


app.set('port', process.env.PORT || 5000);
// const PORT = process.env.PORT || 5000;
app.listen(app.get('port'));