const mongoose = require('mongoose');

//Pasando datos de la conexion de BD
const URI = process.env.MONGOBD_URI 
    ? process.env.MONGOBD_URI 
    : 'mongodb://localhost/databasetest';


mongoose.connect(URI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}); 


const connection = mongoose.connection;


connection.once('open', () => { 
    console.log('DB is connected');
});