const Habitacion = require('../models/Habitacion');

const habitacionCtrl = {};

habitacionCtrl.getAll = (req, res) =>{
    Habitacion.find()
        .then((habitaciones) => {
            res.json(habitaciones);
        })
        .catch((err) => {
            res.json(err);
        });
};

habitacionCtrl.get = (req, res) =>{
    let id = req.params.id
    Habitacion.findById(id)
        .then((habitacion) => {
            res.json(habitacion);
        })
        .catch((err) => {
            res.json(err);
        });
};

habitacionCtrl.busqueda = (req, res) =>{    
    Habitacion.find({
            $or: [
                {nombre: { $regex: req.params.search, $options: 'i' }}
            ]
        }).then((resultado) => {
            res.json(resultado);
        }).catch((err) => {
            res.json(err);
        });  
};


habitacionCtrl.nuevo = (req, res) =>{
    const habitacion = new Habitacion({
        nombre: req.body.nombre,
        numero: req.body.numero,
        capacidad: req.body.capacidad,
        precio: req.body.precio
    });
    habitacion.save()
        .then((habitacion) => {
            res.json(habitacion);
        })
        .catch((err) => {
            res.json(err);
        });
};

habitacionCtrl.editar = (req, res) =>{
    const { id } = req.params;
    const habitacion = {
        numero: req.body.numero,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        precio: req.body.precio
    };
    
    Habitacion.findByIdAndUpdate(id, {$set: habitacion })
        .then((habitacion) => {
            res.json(habitacion);
        })
        .catch((err) => {
            res.json(err);
        });
};

habitacionCtrl.eliminar = (req, res) => {
    const { id } = req.params;
    Habitacion.findByIdAndDelete(id)
        .then((habitacion) => {
            res.json(habitacion);
        })
        .catch((err) => {
            res.json(err);
        });
};


module.exports = habitacionCtrl;