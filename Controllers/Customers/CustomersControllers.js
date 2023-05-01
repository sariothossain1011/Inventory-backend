const mongoose = require("mongoose");
const DataModel = require('../../Models/Customers/CustomersModel')
const CreateServices = require('../../Services/Common/CreateServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const ListServices = require('../../Services/Common/ListServices')
const DropDownServices = require('../../Services/Common/DropDownServices')
const DeleteService = require('../../Services/Common/DeleteService')
const CheckAssociateService = require('../../Services/Common/CheckAssociateService')
const SalesModel = require('../../Models/Sales/SalesModel');
const DetailsByIDService = require("../../Services/Common/DetailsByIDService");

// CREATE BRAND API 
exports.CreateCustomers = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE BRAND API 
exports.UpdateCustomers = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST BRAND API 
exports.ListCustomers = async(req,res) =>{
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options": "i"};
    let SearchArray = [{CustomerName:SearchRgx},{Phone:SearchRgx},{Eamil:SearchRgx},{Address:SearchRgx}]
    let Result = await ListServices(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

// DROPDOWN BRAND API 
exports.DropDownCustomers = async(req,res) =>{
    let Result = await DropDownServices(req,DataModel,{_id:1,CustomerName:1})
    res.status(200).json(Result)
}

// DELETE CUSTOMERS API 
exports.DeleteCustomers = async(req,res) =>{
    let DeleteID = req.params.id ;
    const ObjectId =mongoose.Types.ObjectId ;

    let CheckAssociate = await CheckAssociateService({CustomerID : ObjectId(DeleteID)},SalesModel);
    if(CheckAssociate){
        res.status(200).json({status:"associate", data: "Associate with sales"})
    }
    else{
        let Result = await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

// DETAILS CUSTOMERS API 
exports.CustomersDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}