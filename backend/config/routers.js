const express = require('express');
const {listCitas, addCitas} = require('../controller/cita.controller');


const router = express.Router();


router.get('/', listCitas());
router.post('/', addCitas());
//router.get('/:id',);
//router.get('/:name',);
//router.delete('/:id',);
//router.put('/:id', ); 

module.exports = router;
