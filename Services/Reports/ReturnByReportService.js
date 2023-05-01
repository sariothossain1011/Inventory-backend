const ReturnsProductModel = require('../../Models/Returns/ReturnsProductModel');

const ReturnByReportService = async(Request)=>{
    try {
        let UserEmail = Request.headers['email'];
        let FormDate = Request.body['FormDate'];
        let ToDate = Request.body['ToDate'];

        let data = await ReturnsProductModel.aggregate([
            {$match:{UserEmail:UserEmail,CreateDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Total"}
                        }
                    }],
                    Rows:[
                        {$lookup:{from:"products",localField:"ProductID",foreignField:"_id",as:"products"}},
                        {$unwind:"$products"},
                        {$lookup:{from:"brands",localField:"Product.BrandID",foreignField:"_id",as:"brands"}},
                        {$lookup:{from:"categories",localField:"CategoryID",foreignField:"_id",as:"categories"}},

                    ]
                }
            }
        ])

        return {status:"success",data:data}

    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports = ReturnByReportService