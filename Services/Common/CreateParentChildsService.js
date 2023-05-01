const mongoose = require('mongoose')

const CreateParentChildsService = async (Request,ParentModel,ChildsModel,JoinPropertyName)=>{

    // CREATE TRANSACTION SESSION 
    const session = await mongoose.startSession();
    try {
        // BEGIAN TRANSTACTION 
        await session.startTransaction();

        // FIRST TRANSACTION
        let Parent = Request.body['Parent'];
        Parent.UserEmail = Request.headers['email'];
        let ParentCreation = await ParentModel.create([Parent],{session});
        
        // SECOND TRANSACTION
        let Childs = Request.body['Childs'];
        await Childs.forEach((element)=>{
            element[JoinPropertyName] = ParentCreation[0]['_id'];
            element['UserEmail'] = Request['email']
        })

        let ChildsCreation = await ChildsModel.insertMany(Childs,{session});

        // TRANSACTION SUCCESS 
        await session.commitTransaction();
        session.endSession();
        return {status:"success", Parent: ParentCreation,Childs:ChildsCreation};
        
    } catch (error) {
        
        // ROLL BACK TRANSACTION IF FAIL 
        await session.abortTransaction();
        session.endSession();
        return {status:"fail",data:error.toString()}
    }
}

module.exports = CreateParentChildsService