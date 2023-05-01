const mongoose = require('mongoose');

const SalesProductSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    SaleID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    ProductID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Qty:{
        type:Number,
    },
    UnitCast:{
        type:Number,
    },
    Total:{
        type:Number,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const SalesProductModel = mongoose.model("salesproducts",SalesProductSchema);

module.exports = SalesProductModel