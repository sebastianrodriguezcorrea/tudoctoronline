const mongoose = require('mongoose');

const especiealidadShema = mongoose.Schema({
    id_especialidad: String,
    nombre: String,
    descripcion: String,

}) 

module.exports = mongoose.model('especialidad', especiealidadShema);
