const router =  require('express').Router();
const {getNotes, getNote, deleteNote, updateNote, createNotes} = require('../controllers/notes');

router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote)
module.exports = router; 
