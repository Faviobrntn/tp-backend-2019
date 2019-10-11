var router = require('express').Router();

router.use('/api/usuarios', require('./usuarios.routes'));
router.use('/api/habitaciones', require('./habitaciones.routes'))
router.use('/api/reservas', require('./reservas.routes'))

module.exports = router;