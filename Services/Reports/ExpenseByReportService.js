const ExpenseModel = require('../../Models/Expenses/ExpenseModel')

const ExpenseByReportService = async(Request)=>{
    try{
        let UserEmail=Request.headers['email'];
        let FormDate=  Request.body['FormDate']
        let ToDate=  Request.body['ToDate']

        let data=await  ExpenseModel.aggregate([
            {$match: {UserEmail:UserEmail,CreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
                    ],
                }
            }


        ])

        return {status: "success", data: data}

    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports = ExpenseByReportService