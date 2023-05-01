const DataModel = require('../../Models/Expenses/ExpenseModel')

const CreateServices = require('../../Services/Common/CreateServices')
const ListOneJoinServices = require('../../Services/Common/ListOneJoinServices')
const UpdateServices = require('../../Services/Common/UpdateServices')
const DeleteService = require('../../Services/Common/DeleteService')
const DetailsByIDService = require('../../Services/Common/DetailsByIDService')

// CREATE EXPNESE API 
exports.CreateExpense = async(req,res) =>{
    let Result = await CreateServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE EXPNESE API 
exports.UpdateExpense = async(req,res) =>{
    let Result = await UpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// LIST EXPNESE API 
exports.ListExpense = async(req,res) =>{
    let SearchRgx = {"$regex":req.params.searchKeyword, "$options": "i"};
    let SearchArray = [{Note:SearchRgx},{Amount:SearchRgx},{"Type.Name":SearchRgx},]
    let JoinStage = {$lookup:{from:"expensetypes",localField:"TypeID",foreignField:"_id",as:"Type"}}
    let Result = await ListOneJoinServices(req,DataModel,SearchArray,JoinStage)
    res.status(200).json(Result)
}


// DELETE EXPNESE API 
exports.DeleteExpense = async(req,res) =>{
    
    let Result = await DeleteService(req,DataModel)
    res.status(200).json(Result)
}

// DETAILS EXPNESE API 
exports.ExpenseDetailsByID = async(req,res) =>{
    let Result = await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}