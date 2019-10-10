const router = require('express').Router();
const reserva = require('../controllers/reserva.controller');

router.get('/', reserva.getAll );
router.get('/:id', reserva.get );
router.post('/', reserva.nuevo );
router.put('/:id', reserva.editar);
router.delete('/:id', reserva.eliminar );

module.exports = router;    