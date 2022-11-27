const express = require('express')
const {crearPaciente, getPaciente} = require('../controller/paciente.controller')
const conexionDB = require("./database")
//local server
class Server{
    constructor(){
        this.port = 3000
        this.app = express()
        this.app.use(express.json())
        this.app.listen(this.port, () =>{
            console.log("se esta ejecutando la APP port 3000")
        })
        this.routes()
        conexionDB()

    }
    // RUTA PARA CREAR USUARIO 
    routes() {
        //login
      this.app.post("/paciente", crearPaciente)
        //crear cita  
      this.app.get("/paciente", getPaciente)
        //modificar
        //delete
    }
}
  module.exports = Server
