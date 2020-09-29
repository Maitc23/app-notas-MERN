const router =  require('express').Router();
const {getUsers, createUser, deleteUser} = require('../controllers/users')

//Rutas para utilizar los metodos de los usuarios
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)

module.exports = router; 
