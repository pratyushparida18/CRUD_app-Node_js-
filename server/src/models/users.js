const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number ,required: true, unique: true, min: 10},
    password: { type: String, required: true }, 
});

const User = mongoose.model('Users', userSchema);

module.exports = User;