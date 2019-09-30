const router = require('express').Router();
const usuarios = require('../controllers/usuarios.controller');

router.get('/', usuarios.getAll);
router.get('/:id', usuarios.get);
router.post('/', usuarios.nuevo);
router.put('/:id', usuarios.editar);
router.delete('/:id', usuarios.eliminar);

module.exports = router;