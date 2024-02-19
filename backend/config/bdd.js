//------------BD Config -------------//
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hamdi:test@cluster0.aafzfpj.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.on('connected',()=>{
    console.log('bdd connexion oooooook ');
});

mongoose.connection.on('error',(err)=>{
    console.error('bdd connexion not ok ');
});
