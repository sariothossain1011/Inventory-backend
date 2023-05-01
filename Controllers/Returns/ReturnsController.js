const ParentModel = require('../../Models/Returns/ReturnsModel')
const ChildsModel = require('../../Models/Returns/ReturnsProductModel');
const CreateParentChildsService = require('../../Services/Common/CreateParentChildsService');
const DeleteParentChildsService = require('../../Services/Common/DeleteParentChikdsService');
const ListOneJoinServices = require('../../Services/Common/ListOneJoinServices');

// CREATE RETURNS API 
exports.CreateReturn =  async(req,res)=>{
    let Request = await CreateParentChildsService(req,ParentModel,ChildsModel,"ReturnID")
    res.status(200).json(Request);
}

// LIST RETURNS API 
exports.ListReturn = async(req,res) =>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers"}};
    let SearchArray=[{Note: SearchRgx},{'customers.CustomerName': SearchRgx},{'customers.Address': SearchRgx},{'customers.Phone': SearchRgx},{'customers.Email': SearchRgx}]
    let Result=await ListOneJoinServices(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}

// DELETE RETURN API 
exports.DeleteReturn = async(req,res) =>{
    let Result=await DeleteParentChildsService(req,ParentModel,ChildsModel,"ReturnID");
    res.status(200).json(Result)
}