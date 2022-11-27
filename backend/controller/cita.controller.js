const cita = require("../models/cita");

// LISTAR CITAS --[TABLA CITAS]--
const listCitas = async (req, res) => {

        try{
            const cita = await  cita.find();
            res.json(cita);
            req.send(error);
        } catch(error){
            req.send(error);
        }
}       

//AGREGAR CITAS 
const addCita = async (req, res) => {
    try{
        const newCita = new cita(req.body);
        const saveCita = await newCita.save();
        res.json(saveCita);

    }catch(error){
        res.send(error);
    }
}

module.exports = {
    listCitas,
    addCita,
}