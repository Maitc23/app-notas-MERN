const router =  require('express').Router();


const userRoutes = require('./users');
const notesRoutes = require('./notes');


router.use('/users',userRoutes); 
router.use('/notes', notesRoutes);

module.exports = router; 
