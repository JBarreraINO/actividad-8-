const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// generar un modelo para 
//cada uno de los inmuebles, con los siguientes 
//datos

const inmuebleSchema = new Schema({
    piso : Number,
    letra : String,
    extension : Number,
    habitaciones : Number,
    alquilado : Boolean,
    propietario : String,
    mail : String });


    
    
    module.exports = mongoose.model('inmueble', inmuebleSchema);
//debe  establecer  el  nombre  que  tendrá  la  colección 
// dentro de la base de datos.