const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    id_doctor: String,
    nombre: String,
    num_cedula: String,
    telefono: String,
    especialidad: String,
})

module.exports = mongoose.model('doctor', doctorSchema);
