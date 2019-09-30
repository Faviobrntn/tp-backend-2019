//prod.js - claves para el entorno de produccion, obtenidas desde las variables de entorno del servidor
module.exports = {
    mongoURI: process.env.MONGO_URI,
    cookiekey: process.env.COOKIE_KEY,
};