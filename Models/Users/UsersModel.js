const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    mobile:{
        type:String,
    },
    password:{
        type:String,
    },
    photo:{
        type:String,
    },
    createDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel ;