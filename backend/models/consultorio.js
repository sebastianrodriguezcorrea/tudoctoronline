const mongoose = require('mongoose');

const consultorioSchema = mongoose.Schema({
    id_consultorio: String,    
    num_consultorio: String,
    descripcion: String,
    id_doctor: {
        type: String,
        unique: true,
    }
})

module.exports = mongoose.model('consultorio', consultorioSchema);