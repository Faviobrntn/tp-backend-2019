var router = require('express').Router();

router.use('/api/usuarios', require('./usuarios.routes'));

module.exports = router;