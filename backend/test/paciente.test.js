
//PRUEBAS imp usse case
const PacienteModel = require("../models/paciente")
const conexionDB = require("../config/database")

conexionDB()

const paciente1 = 
{
    tipoDocumento: "CC",
    numDocumento: "2345",
    username: "CARLOS",
    email: "panchov@lgmail.com",
    password: "1122"
}

PacienteModel.create(paciente1)
    .then((respuesta)=>{console.log("Se inserto el paciente" + " " + respuesta.username)
})
    .catch(()=>{console.log("Hubo un error al insertar el paciente")})