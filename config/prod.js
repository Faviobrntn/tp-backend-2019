//prod.js - claves para el entorno de produccion, obtenidas desde las variables de entorno del servidor
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookiekey: process.env.COOKIE_KEY,
};