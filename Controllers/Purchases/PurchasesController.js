const ParentModel = require('../../Models/Purchases/PurchaseModel')
const ChildsModel = require('../../Models/Purchases/PurchaseProductModel');
const CreateParentChildsService = require('../../Services/Common/CreateParentChildsService');
const DeleteParentChildsService = require('../../Services/Common/DeleteParentChikdsService');
const ListOneJoinServices = require('../../Services/Common/ListOneJoinServices');

// CREATE PURCHASES API 
exports.CreatePurchases =  async(req,res)=>{
    let Request = await CreateParentChildsService(req,ParentModel,ChildsModel,"PurchaseID")
    res.status(200).json(Request);
}

// LIST PURCHASES API 
exports.ListPurchase = async(req,res) =>{
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "suppliers", localField: "SupplierID", foreignField: "_id", as: "suppliers"}};
    let SearchArray=[{Note: SearchRgx},{'suppliers.Name': SearchRgx},{'suppliers.Address': SearchRgx},{'suppliers.Phone': SearchRgx},{'suppliers.Email': SearchRgx}]
    let Result=await ListOneJoinServices(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}

// DELETE PURCHASES API 
exports.DeletePurchase = async(req,res) =>{
    let Result=await DeleteParentChildsService(req,ParentModel,ChildsModel,"PurchaseID");
    res.status(200).json(Result)
}