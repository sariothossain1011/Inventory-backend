const ExpenseByReportService = require("../../Services/Reports/ExpenseByReportService")
const PurchaseByReportService = require("../../Services/Reports/PurchaseByReportService")
const ReturnByReportService = require("../../Services/Reports/ReturnByReportService")
const SaleByReportService = require("../../Services/Reports/SalesByReportService")




// EXPENSE
exports.ExpensesByDate=async (req, res) => {
    let Result=await ExpenseByReportService(req)
    res.status(200).json(Result)
}


// PURCHASES 
exports.PurchaseByDate=async (req, res) => {
    let Result=await PurchaseByReportService(req)
    res.status(200).json(Result)
}




// RETURNS 
exports.ReturnByDate=async (req, res) => {
    let Result=await ReturnByReportService(req)
    res.status(200).json(Result)
}


// SALES 
exports.SalesByDate=async (req, res) => {
    let Result=await SaleByReportService(req)
    res.status(200).json(Result)
}



