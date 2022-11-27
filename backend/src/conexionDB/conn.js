//peticion a mongoos SERVER
const mongoose=require('mongoose');
mongoose
    .connect("mongodb://localhost:27017", 
 {  
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err,res) =>{
    if(err) {
        throw err;

    }else{
        console.log('La conexion a la base de datos fue OK..!')
    }
});
   
module.exports =mongoose;

