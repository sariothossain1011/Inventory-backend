const { default: mongoose } = require('mongoose')
const DataModel = require('../../Models/Products/ProductsModel')
const PurchaseProductModel = require('../../Models/Purchases/PurchaseProductModel')
const ReturnsProductModel = require('../../Models/Returns/ReturnsProductModel')
const SalesProductModel = require('../../Models/Sales/SalesProductModel')
const CheckAssociateService = require('../../Services/Common/CheckAssociateService')

const CreateServices = require('../../Services/Common/CreateServices')
const DeleteService = require('../../Services/Common/DeleteService')
const DetailsByIDService = require('../../Services/Common/DetailsByIDService')
const ListTwoJoinServices = require('../../Services/Common/ListTwoJoinServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const DropDownServices = require('../../Services/Common/DropDownServices')

// CREATE PRODUCTS API 
exports.CreateProduct = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE PRODUCTS API 
exports.UpdateProduct = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST PRODUCTS API 
exports.ListProduct = async(req,res) =>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage1={$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}};
    let JoinStage2= {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}};
    let SearchArray=[{Name: SearchRgx},{Unit: SearchRgx},{Details: SearchRgx},{'brands.Name':SearchRgx},{'categories.Name':SearchRgx}]
    let Result=await ListTwoJoinServices(req,DataModel,SearchArray,JoinStage1,JoinStage2);
    res.status(200).json(Result)
}

// DELETE PRODUCTS API 
exports.DeleteProduct = async(req,res) =>{
    let DeleteID = req.params.id ;
    const ObjectId = mongoose.Types.ObjectId;

    let CheckReturnAssociate = await CheckAssociateService({ProductID:ObjectId(DeleteID)},ReturnsProductModel);
    let CheckPurchaseAssociate = await CheckAssociateService({ProductID:ObjectId(DeleteID)},PurchaseProductModel);
    let CheckSaleAssociate = await CheckAssociateService({ProductID:ObjectId(DeleteID)},SalesProductModel);

    if(CheckReturnAssociate){
        res.status(200).json({status:"associate", data: "Associate with Return"})
    }
    else if(CheckPurchaseAssociate){
        res.status(200).json({status:"associate", data: "Associate with Purchase"})
    }else if(CheckSaleAssociate){
        res.status(200).json({status:"associate", data: "Associate with Sale"})
    }else{
        let Result = await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

// DETAILS PRODUCTS API 
exports.ProductDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}


exports.ProductsDropDown=async (req, res) => {
    let Result= await DropDownServices(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}