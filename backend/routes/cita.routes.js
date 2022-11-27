const express = require('express');
const { 
    listCitas, 
    addCita,
    actualizarPaciente,
    borrarPaciente
} = require('../controller/cita.controller')


const router = express.Router();

/* async (req, res) */

router.get('/', listCitas );
router.post('/', addCita);
router.put('/paciente:id', actualizar );
router.delete('/paciente:id', borrar);
module.exports = router

