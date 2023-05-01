const DataModel = require('../../Models/Brands/BrandsModel')

const CreateServices = require('../../Services/Common/CreateServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const ListServices = require('../../Services/Common/ListServices')
const DropDownServices = require('../../Services/Common/DropDownServices')
const { default: mongoose } = require('mongoose')
const CheckAssociateService = require('../../Services/Common/CheckAssociateService')
const ProductsModel = require('../../Models/Products/ProductsModel')
const DeleteService = require('../../Services/Common/DeleteService')
const DetailsByIDService = require('../../Services/Common/DetailsByIDService')

// CREATE BRAND API 
exports.CreateBrands = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE BRAND API 
exports.UpdateBrands = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST BRAND API 
exports.ListBrands = async(req,res) =>{
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options": "i"};
    let SearchArray = [{Name:SearchRgx}]
    let Result = await ListServices(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

// DROPDOWN BRAND API 
exports.DropDownBrands = async(req,res) =>{
    let Result = await DropDownServices(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}


// DELETE BRAND API 
exports.DeleteBrands = async(req,res) =>{
    let DeleteID = req.params.id ;
    const ObjectId =mongoose.Types.ObjectId ;

    let CheckAssociate = await CheckAssociateService({BrandID : ObjectId(DeleteID)},ProductsModel);
    if(CheckAssociate){
        res.status(200).json({status:"associate", data: "Associate with Product"})
    }
    else{
        let Result = await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

// DETAILS BRAND API 
exports.BrandsDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}