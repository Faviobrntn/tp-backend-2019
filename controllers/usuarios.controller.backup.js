const mongoose = require('mongoose');
const User = mongoose.model('usuarios');

// const ObjectId = mongoose.Types.ObjectId;
const Usuarios = {};

Usuarios.getAll = (req, res, next) => {
    User.find({})
        .then(usuarios => {
            if (!usuarios) {
                return res.sendStatus(401);
            }
            return res.json({ 'usuarios': usuarios })
        })
        .catch(next);
    //res.send("get clients");
    //next();
};

Usuarios.get = (req, res, next) => {
    //let id =  new ObjectId(req.params.id);
    let id = req.params.id
    User.findById(id)
        // .populate('pets')
        .then(usuarios => {
            if (!usuarios) { return res.sendStatus(401); }
            return res.json({ 'usuarios': usuarios })
        })
        .catch(next);
    //res.send("get client:" + id);
    //next();
};

Usuarios.nuevo = (req, res, next) => {
    let id = req.body.id;
    let name = req.body.name;
    // User.findByIdAndUpdate(id, {$set: {}});
    res.send("Metodo POST usuario:" + id + " - name:" + name);
    //next();
};


Usuarios.editar = (req, res, next) => {
    let id = req.params.id
    let name = req.body.name;
    res.send("Metodo PUT usuario:" + id + " - name:" + name);
    //next();
};


Usuarios.eliminar = (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndRemove(id);
    res.sendStatus(200);
    //res.send("delete client:"+id);
    //next();
};


module.exports = Usuarios;