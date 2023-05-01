const mongoose = require('mongoose');

const ExpenseTypeSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    ExpenseTypeName:{
        type:String,
        unique:true,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const ExpenseTypeModel = mongoose.model("expensetypes",ExpenseTypeSchema);

module.exports = ExpenseTypeModel ;