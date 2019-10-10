var router = require('express').Router();

router.use('/api/usuarios', require('./usuarios.routes'));
app.use('/api/habitaciones', require('./habitaciones.routes'))
app.use('/api/reservas', require('./reservas.routes'))

module.exports = router;