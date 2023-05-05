const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    TypeID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Amount:{
        type:Number,
    },
    Note:{
        type:String,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
    
},{versionKey:false});

const ExpenseModel = mongoose.model("expenses",ExpenseSchema);

module.exports = ExpenseModel ;