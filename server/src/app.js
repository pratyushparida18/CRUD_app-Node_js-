const express = require('express');
const app = express();
require('../src/db/mongo_connection');
const User = require('../src/models/users');

const port = process.env.PORT || 8000;
app.use(express.json());

app.post('/users', async (req, res) => {    
    try {
        const user = new User(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
});

app.get('/users', async (req, res) => {
    try{
        const usersData = await User.find();
        res.send(usersData);
    }catch(e){
        res.send(e);
    }
});

app.patch('/users/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        console.log(_id);
        const updateUser = await User.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(updateUser);
    }catch(e){
        res.status(404).send(e);
    }
});

app.delete('/users/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(_id);
        res.send(deleteUser);
    }catch(e){
        res.status(500).send(e);
    }
});

app.listen(port, () => {    
    console.log(`Server is listening on port ${port}`);
});