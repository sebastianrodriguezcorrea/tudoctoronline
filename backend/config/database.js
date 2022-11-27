const mongoose =require("mongoose")

//1.Conectarse a BDmongo 
const conexionDB = async function (){
    try{
        const db = await mongoose.connect("mongodb://localhost:27017/tudoctor")
        console.log("connection successful")
    } catch (error) {
        console.log("error")
    }
}
module.exports = conexionDB
