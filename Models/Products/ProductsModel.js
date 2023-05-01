const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    UserEmail:{
        type:String,
    },
    CategoryID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    BrandID:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Name:{
        type:String,
    },
    Unit:{
        type:String,
    },
    Details:{
        type:String,
    },
    CreateDate:{
        type:Date,
        default:Date.now(),
    }
},{versionKey:false});

const ProductsModel = mongoose.model("products",ProductsSchema);

module.exports = ProductsModel ;