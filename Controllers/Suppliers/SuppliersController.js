const mongoose = require('mongoose')
const DataModel = require('../../Models/Suppliers/SuppliersModel')
const CreateServices = require('../../Services/Common/CreateServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const ListServices = require('../../Services/Common/ListServices')
const DropDownServices = require('../../Services/Common/DropDownServices')
const DeleteService = require('../../Services/Common/DeleteService')
const CheckAssociateService = require('../../Services/Common/CheckAssociateService')
const PurchaseModel = require('../../Models/Purchases/PurchaseModel')
const DetailsByIDService = require('../../Services/Common/DetailsByIDService')

// CREATE SUPPLIERS API 
exports.CreateSupplier = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE SUPPLIERS API 
exports.UpdateSupplier = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST SUPPLIERS API 
exports.ListSupplier = async(req,res) =>{
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options": "i"};
    let SearchArray = [{SupplierName:SearchRgx},{Phone:SearchRgx},{Email:SearchRgx},{Address:SearchRgx}]
    let Result = await ListServices(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

// DROPDOWN SUPPLIERS API 
exports.DropDownSupplier = async(req,res) =>{
    let Result = await DropDownServices(req,DataModel,{_id:1,SupplierName:1})
    res.status(200).json(Result)
}

// DELETE SUPPLIERS API 
exports.DeleteSupplier = async(req,res) =>{
    let DeleteID = req.params.id ;
    const ObjectId =mongoose.Types.ObjectId ;

    let CheckAssociate = await CheckAssociateService({SupplierID : ObjectId(DeleteID)},PurchaseModel);
    if(CheckAssociate){
        res.status(200).json({status:"associate", data: "Associate with Purchase"})
    }
    else{
        let Result = await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

// DETAILS SUPPLIERS API 
exports.SuppliersDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}