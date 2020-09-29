const router =  require('express').Router();
const {getNotes, getNote, deleteNote, updateNote, createNotes} = require('../controllers/notes');

//Rutas para utilizar los metodos de las notas
router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote)
    
module.exports = router; 
