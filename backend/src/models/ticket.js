const { Schema, model} =require("mongoose")

const ticketSchema = Schema(
   {
    'asunto': String,
    'cod': String,
    'fecha': String,
    'tema': String,
    'dependencias': String,
    'asunto': String,
    'prioridad': String,
    'estado': String,
    paciente: {
        type: Schema.Types.ObjectId, 
        ref: "paciente"
    }
   } 
)