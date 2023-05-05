const SalesProductModel = require('../../Models/Sales/SalesProductModel');

const SaleByReportService = async(Request)=>{
    try{
        // add the debugger statement here
        debugger;

        let UserEmail=Request.headers['email'];
        let FormDate=  Request.body['FormDate']
        let ToDate=  Request.body['ToDate']
        debugger
        let data=await SalesProductModel.aggregate([
            {$match: {UserEmail:UserEmail,CreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Total"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "products", localField: "ProductID", foreignField: "_id", as: "products"}},
                        {$unwind : "$products" },
                        {$lookup: {from: "brands", localField: "products.BrandID", foreignField: "_id", as: "brands"}},
                        {$lookup: {from: "categories", localField: "products.CategoryID", foreignField: "_id", as: "categories"}}
                    ]
                }
            }
        ])
        debugger

        return {status: "success", data: data}
        debugger

    }
    catch (error) {
        return {status: "fail", data: error.toString()}
        debugger
    }
}


module.exports = SaleByReportService