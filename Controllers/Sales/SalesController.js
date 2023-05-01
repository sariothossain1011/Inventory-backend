const ParentModel = require('../../Models/Sales/SalesModel')
const ChildsModel = require('../../Models/Sales/SalesProductModel');
const CreateParentChildsService = require('../../Services/Common/CreateParentChildsService');
const DeleteParentChildsService = require('../../Services/Common/DeleteParentChikdsService');
const ListOneJoinServices = require('../../Services/Common/ListOneJoinServices');

// CREATE SATLES API 
exports.CreateSales =  async(req,res)=>{
    let Request = await CreateParentChildsService(req,ParentModel,ChildsModel,"SaleID")
    res.status(200).json(Request);
}

// LIST SATLES API 
exports.ListSales = async(req,res) =>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers"}};
    let SearchArray=[{Note: SearchRgx},{'customers.CustomerName': SearchRgx},{'customers.Address': SearchRgx},{'customers.Phone': SearchRgx},{'customers.Email': SearchRgx}]
    let Result=await ListOneJoinServices(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}


// DELETE SATES API 
exports.DeleteSale = async(req,res) =>{
    let Result=await DeleteParentChildsService(req,ParentModel,ChildsModel,'SaleID')
    res.status(200).json(Result)
}