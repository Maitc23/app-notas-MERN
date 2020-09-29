const {Schema, model} = require('mongoose');

//Modelo para usuario en la BD
const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        trim: true, 
        unique: true
    }

}, { 
    timestamps: true
});

module.exports = model('Users', userSchema)