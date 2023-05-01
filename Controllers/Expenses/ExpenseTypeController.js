const mongoose = require('mongoose');

const DataModel = require('../../Models/Expenses/ExpenseTypeModel')
const CreateServices = require('../../Services/Common/CreateServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const ListServices = require('../../Services/Common/ListServices')
const DropDownServices = require('../../Services/Common/DropDownServices')
const ExpenseModel = require('../../Models/Expenses/ExpenseModel');
const CheckAssociateService = require('../../Services/Common/CheckAssociateService');
const DeleteService = require('../../Services/Common/DeleteService');
const DetailsByIDService = require('../../Services/Common/DetailsByIDService');

// CREATE EXPENSE TYPE API 
exports.CreateExpenseType = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE EXPENSE TYPE API 
exports.UpdateExpenseType = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST EXPENSE TYPE API 
exports.ListExpenseType = async(req,res) =>{
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options": "i"};
    let SearchArray = [{ExpenseName:SearchRgx}]
    let Result = await ListServices(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

// DROPDOWN EXPENSE TYPE API 
exports.DropDownExpenseType = async(req,res) =>{
    let Result = await DropDownServices(req,DataModel,{_id:1,ExpenseTypeName:1})
    res.status(200).json(Result)
}

// DELETE EXPENSE TYPE API 
exports.DeleteExpenseType = async(req,res) =>{
    let DeleteID = req.params.id ;
    const ObjectId =mongoose.Types.ObjectId ;

    let CheckAssociate = await CheckAssociateService({TypeID : ObjectId(DeleteID)},ExpenseModel);
    if(CheckAssociate){
        res.status(200).json({status:"associate", data: "Associate with Expense"})
    }
    else{
        let Result = await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

// DETAILS EXPNESE TYPE API 
exports.ExpenseTypeDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}