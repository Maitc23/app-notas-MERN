const {Schema, model} = require('mongoose');

//Modelo de notas de la BD
const notesSchema =new Schema({ 
    title: String, 
    content: {
        type: String, 
        required: true
    },
    author: String, 
    date: {
        type: Date, 
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Notes', notesSchema);