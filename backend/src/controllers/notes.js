const controller = {};
const notesModel = require('../models/notes');

//Metodo para obtener todas las notas
controller.getNotes = async (req, res) => {

    const notes = await notesModel.find();
    res.json(notes);

}
 
//Metodo para obtener una sola nota
controller.getNote = async (req, res) => {
    
    const note  = await notesModel.findById(req.params.id);
    res.json(note);

}

//Metodo para crear notas
controller.createNotes =  async (req, res) => {

    const {title, content, date, author} = req.body;
    const newNote = new notesModel({
        title: title, 
        content: content, 
        date: date, 
        author: author
    }); 
    await newNote.save();
    res.json({message: 'Note saved'});

}
//Metodo para actualizar notas
controller.updateNote = async (req, res) => {
    const { title, content, author} = req.body;
    await notesModel.findOneAndUpdate(req.params.id, { 
        title: title, 
        author: author, 
        content: content
    }); 
    res.json({message: 'Note Updated'});
}

//Metodo para borrar notas
controller.deleteNote = async (req,res) => {
    await notesModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}


module.exports = controller;