const ExpenseSummaryService = require("../../Services/Summary/ExpenseSummaryService")
const PurchaseSummaryService = require("../../Services/Summary/PurchaseSummaryService")
const ReturnSummaryService = require("../../Services/Summary/ReturnSummaryService")
const SalesSummaryService = require("../../Services/Summary/SalesSummaryService")


// EXPENSE
exports.ExpensesSummary =async (req, res) => {
    let Result=await ExpenseSummaryService(req)
    res.status(200).json(Result)
}


// PURCHASES 
exports.PurchaseSummary =async (req, res) => {
    let Result=await PurchaseSummaryService(req)
    res.status(200).json(Result)
}



// RETURNS 
exports.ReturnSummary =async (req, res) => {
    let Result=await ReturnSummaryService(req)
    res.status(200).json(Result)
}


// SALES 
exports.SalesSummary =async (req, res) => {
    let Result=await SalesSummaryService(req)
    res.status(200).json(Result)
}
