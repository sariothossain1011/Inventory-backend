const ExpenseByReportService = require("../../Services/Reports/ExpenseByReportService")
const PurchasesReportService = require("../../Services/Reports/PurchaseByReportService")
const ReturnByReportService = require("../../Services/Reports/ReturnByReportService")
const SaleByReportService = require("../../Services/Reports/SalesByReportService")



// Expenses Report By Date
exports.ExpensesByDate = async (req, res) => {
    let result = await ExpenseByReportService(req);
    return res.status(200).json(result);
  };
  
  // Return Report By Date
  exports.ReturnByDate = async (req, res) => {
    let result = await ReturnByReportService(req);
    return res.status(200).json(result);
  };
  
  // Purchase Report By Date
  exports.PurchaseByDate = async (req, res) => {
    let result = await PurchasesReportService(req)
    return res.status(200).json(result);
  };
  
  // Sales Report By Date
  exports.SalesByDate = async (req, res) => {
    let result = await SaleByReportService(req);
    return res.status(200).json(result);
  };
  