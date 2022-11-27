const express = require("express")
const PacienteModel = require("../models/paciente")

//END POIN CREAR PACINETES ---[LOGIN]---
async function crearPaciente( request = express.request, response = express.response){

    const {numDocumento} = request.body

    const pacienteEncontrado = await PacienteModel.findOne ({
        numDocumento: request.body.numDocumento,
    })


    if (pacienteEncontrado){
        response.send({mensaje: "el cliente ya existe"})
    } else {
      PacienteModel.create(request.body)
        .then((pacienteCreado) => {
            response.send({mensaje: "Se creo el paciente", pacienteCreado})
        })
    
        .catch (() => {
            response.send({ mensaje: "No se logro  crear el cliente"})
        })
    }  
  }   

// END PONT LISTAR PACIENTES --[TABLA DE PACIENTES]--
async function getPaciente(req, res = response ) {
    const listPacientes = await PacienteModel.find()
    res.send(listPacientes)
}



module.exports = {crearPaciente, getPaciente} 
