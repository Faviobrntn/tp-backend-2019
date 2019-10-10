const router = require('express').Router();
const habitacion = require('../controllers/habitacion.controller');

router.get('/', habitacion.getAll );
router.get('/:id', habitacion.get );
router.get('/search/:search', habitacion.busqueda );
router.post('/', habitacion.nuevo);
router.put('/:id', habitacion.editar );
router.delete('/:id', habitacion.eliminar );

module.exports = router;    