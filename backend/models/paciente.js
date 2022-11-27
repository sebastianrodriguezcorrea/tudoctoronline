const {Schema, model} = require("mongoose")

//2. Definir el esquema 
const pacienteSchema = Schema({
    tipoDocumento: String,
    numDocumento: String,
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email:{ 
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    }
})

//3. Crear el modulo 
const PacienteModel = model("Paciente", pacienteSchema)
module.exports = PacienteModel
