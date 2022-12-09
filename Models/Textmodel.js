const mongoose = require('mongoose');

const TextSchema = mongoose.Schema({
    Name:{
        type:String,
        min:5,
        max:20,
    },
    Password:{
        type:Number,
        min:5,
        max:10,

    }
})

