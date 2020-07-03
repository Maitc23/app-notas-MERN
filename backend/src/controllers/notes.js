const controller = {};
const notesModel = require('../models/notes');

//Consulta para obtener todas las notas
controller.getNotes = async (req, res) => {

    const notes = await notesModel.find();//Para consultar las notas q hay
    res.json(notes);

}
 
//Consulta para obtener una sola nota
controller.getNote = async (req, res) => {
    
    const note  = await notesModel.findById(req.params.id);
    res.json(note);

}


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

controller.updateNote = async (req, res) => {
    const { title, content, author} = req.body;
    await notesModel.findOneAndUpdate(req.params.id, { 
        title: title, 
        author: author, 
        content: content
    }); 
    res.json({message: 'Note Updated'});
}

controller.deleteNote = async (req,res) => {
    await notesModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}


module.exports = controller;