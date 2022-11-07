const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://127.0.0.1/inmueblesdb';
mongoose.connect(mongoDBUrl);

require ('./models/inmuebles.models');//CHECAR ESTO PORQUE NO SE SI ESTA BIEN