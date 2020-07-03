const controller = {}
const userModel = require('../models/users');


controller.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

controller.createUser = async (req, res) => {
    const {username} = req.body; 
    const newUser = new userModel({
        username: username
    }); 
    await newUser.save();
    res.json({message: 'Usuario creado'});
}

controller.deleteUser = async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario eliminado'})
}
module.exports = controller;