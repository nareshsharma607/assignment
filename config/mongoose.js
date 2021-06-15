const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/UNLU_db');



const db=mongoose.connection;

db.on('error',console.error.bind(console,"error while connecting database"))

db.once('open',()=> console.log('succesfully connectes to database'))


module.exports=db;