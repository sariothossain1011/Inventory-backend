const mongoose = require('mongoose');

const CetegoriesSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    Name:{
        type:String,
        unique:true,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const CetegoriesModel = mongoose.model("categories",CetegoriesSchema);

module.exports = CetegoriesModel ;