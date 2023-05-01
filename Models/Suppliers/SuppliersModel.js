const mongoose = require('mongoose');

const SuppliersSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    SupplierName:{
        type:String,
    },
    Address:{
        type:String,
    },
    Phone:{
        type:String,
        unique:true,
    },
    Email:{
        type:String,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const SuppliersModel = mongoose.model("suppliers",SuppliersSchema);

module.exports = SuppliersModel ;