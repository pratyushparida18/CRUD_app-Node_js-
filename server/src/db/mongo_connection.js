const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pratyushparida18:password%4018@cluster0.gewdlyg.mongodb.net/CRUD?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err.message))
