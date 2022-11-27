var app = require('./app');
var mongoose=require('./ app/conexBD/conn');
var port = 4000;
app.listen(port, () =>{
        console.log("servidor corriendo ok")
});

