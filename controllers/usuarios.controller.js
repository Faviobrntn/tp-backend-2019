const User = require('../models/Usuario');

const Usuarios = {};

Usuarios.getAll = async (req, res, next) => {
    const usuarios = await  User.find({})
    if (!usuarios) { res.sendStatus(401); }
    res.json(usuarios);
};

Usuarios.get = async (req, res, next) => {
    let id = req.params.id
    const usuario = await User.findById(id).populate('pets');
    if (!usuario) { res.sendStatus(401); }
    res.json(usuario);
};

Usuarios.nuevo = async (req, res, next) => {
    const usuario = new User(req.body);
    await usuario.save();
    res.json({
        "mensaje": "Se guardo con éxito"
    });
};


Usuarios.editar = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        email: req.body.email
    };
    await User.findByIdAndUpdate(id, { $set: usuario }, { new: true });
    res.json({
        "mensaje": "Actualizado con éxito"
    });
};


Usuarios.eliminar = async (req, res, next) => {
    let id = req.params.id;
    await User.findByIdAndRemove(id);
    // res.sendStatus(200);
    res.json({
        "mensaje": "Se elimino con éxito"
    });
};


module.exports = Usuarios;