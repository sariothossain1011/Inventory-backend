const mongoose = require('mongoose');

const ReturnsProductSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    ReturnID:{
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

const ReturnsProductModel = mongoose.model("returnsproducts",ReturnsProductSchema);

module.exports = ReturnsProductModel ;