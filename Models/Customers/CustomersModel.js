const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    CustomerName:{
        type:String,
    },
    Phone:{
        type:String,
        unique:true,
    },
    Email:{
        type:String,
    },
    Address:{
        type:String,
    },
    
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const CustomersModel = mongoose.model("customers",CustomersSchema);

module.exports = CustomersModel ;