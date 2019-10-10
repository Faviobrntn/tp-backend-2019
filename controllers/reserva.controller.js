const Reserva = require('../models/Reserva');

const reservaCtrl = {}

reservaCtrl.getAll = async (req, res) =>{
    const reservas = await Reserva.find();
    res.json(reservas);
}

reservaCtrl.get = async (req, res) =>{
    const reserva = await Reserva.findById(req.params.id);
    console.log(req.params.id);
    res.json(reserva);
}

reservaCtrl.nuevo = async (req, res) =>{
    const reserva = new Reserva(req.body);
    console.log(reserva);
    await reserva.save();
    res.json('recibido');
};

reservaCtrl.editar = async (req, res) =>{
    const { id } = req.params;
    const reserva = {
        numero: req.body.numero,
        nombreHabitacion: req.body.nombreHabitacion,
        numeroHabitacion: req.body.numeroHabitacion,
        ingreso: req.body.ingreso,
        salida: req.body.salida,
        monto: req.body.monto
    };
    await Reserva.findById(id, {$set: reserva });
    res.json({status: 'Reserva modificada'})
}

reservaCtrl.eliminar = async (req, res) =>{
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({status: 'Reserva eliminada'});
};


module.exports = reservaCtrl;