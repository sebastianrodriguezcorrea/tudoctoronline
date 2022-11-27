const mongoose = require("mongoose")

//Scema Cita
const citaSchema =  mongoose.Schema ({    
        id_cita: String,    
        fecha_cita: String,
        hora_cita: String,
        descripcion: String,
        Consultorio: String,
        consultorio: {
            ref: 'Consultorio',
            type: mongoose.Types.ObjectId,

        } 
    })

   //
module.exports = mongoose.model('Cita' , citaSchema);
