const mongoose = require('mongoose');

const PurchaseProductSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    PurchaseID:{
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

const PurchaseProductModel = mongoose.model("purchaseproducts",PurchaseProductSchema);

module.exports = PurchaseProductModel ;