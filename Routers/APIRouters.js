const express = require('express');
const router = express.Router()

const AuthMiddleware = require('../Middleware/AuthMiddleware');
const UsersControllers = require('../Controllers/Users/UsersControllers');
const BrandsControllers = require('../Controllers/Brands/BrandsControllers');
const CategoriesController = require('../Controllers/Categories/CategoriesController');
const CustomersControllers = require('../Controllers/Customers/CustomersControllers');
const SuppliersController =require('../Controllers/Suppliers/SuppliersController')
const ExpenseTypeController = require('../Controllers/Expenses/ExpenseTypeController');
const ExpenseController = require('../Controllers/Expenses/ExpenseController');
const ProductsController = require('../Controllers/Products/ProductsController');
const PurchasesController = require('../Controllers/Purchases/PurchasesController');
const SalesController = require('../Controllers/Sales/SalesController');
const ReturnsController = require('../Controllers/Returns/ReturnsController');

const ReportsController = require('../Controllers/Reports/ReportsController');
const SummaryController = require('../Controllers/Summary/SummaryController');




// USER PROFILE API 
router.post('/Registration', UsersControllers.Registration)
router.post('/Login', UsersControllers.Login)
router.post('/ProfileUpdate', AuthMiddleware, UsersControllers.ProfileUpdate)
router.get('/ProfileDetails', AuthMiddleware, UsersControllers.ProfileDetails)
router.get('/RecoverVerifyEmail/:email', UsersControllers.RecoverVerifyEmail)
router.get('/RecoverVerifyOTP/:email/:otp', UsersControllers.RecoverVerifyOTP)
router.post('/RecoverResetPass', UsersControllers.RecoverResetPass)

// BRANDS API 
router.post('/CreateBrands', AuthMiddleware , BrandsControllers.CreateBrands)
router.post('/UpdateBrands/:id', AuthMiddleware , BrandsControllers.UpdateBrands)
router.get('/BrandList/:pageNo/:perPage/:searchKeyword', AuthMiddleware , BrandsControllers.ListBrands)
router.get('/DropDownBrands', AuthMiddleware , BrandsControllers.DropDownBrands)
router.get('/DeleteBrand/:id', AuthMiddleware , BrandsControllers.DeleteBrands)
router.get('/BrandsDetailsByID/:id', AuthMiddleware , BrandsControllers.BrandsDetailsByID)

// CATEGORIES API 
router.post('/CreateCategories', AuthMiddleware , CategoriesController.CreateCategories)
router.post('/UpdateCategories/:id', AuthMiddleware , CategoriesController.UpdateCategories)
router.get('/ListCategories/:pageNo/:perPage/:searchKeyword', AuthMiddleware , CategoriesController.ListCategories)
router.get('/DropDownCategories', AuthMiddleware , CategoriesController.DropDownCategories)
router.get('/DeleteCategories/:id', AuthMiddleware , CategoriesController.DeleteCategories)
router.get('/CategoriesDetailsByID/:id', AuthMiddleware , CategoriesController.CategoriesDetailsByID)

// CUSTOMERS API 
router.post('/CreateCustomers', AuthMiddleware ,CustomersControllers.CreateCustomers)
router.post('/UpdateCustomers/:id', AuthMiddleware ,CustomersControllers.UpdateCustomers)
router.get('/ListCustomers/:pageNo/:perPage/:searchKeyword', AuthMiddleware,CustomersControllers.ListCustomers)
router.get('/DropDownCustomers', AuthMiddleware , CustomersControllers.DropDownCustomers)
router.get('/DeleteCustomers/:id', AuthMiddleware , CustomersControllers.DeleteCustomers)
router.get('/CustomersDetailsByID/:id', AuthMiddleware , CustomersControllers.CustomersDetailsByID)

// SUPPLIERS API 
router.post('/CreateSuppliers', AuthMiddleware , SuppliersController.CreateSupplier)
router.post('/UpdateSuppliers/:id', AuthMiddleware , SuppliersController.UpdateSupplier)
router.get('/ListSuppliers/:pageNo/:perPage/:searchKeyword', AuthMiddleware , SuppliersController.ListSupplier)
router.get('/DropDownSuppliers', AuthMiddleware , SuppliersController.DropDownSupplier)
router.get('/DeleteSuppliers/:id', AuthMiddleware , SuppliersController.DeleteSupplier)
router.get('/SuppliersDetailsByID/:id', AuthMiddleware , SuppliersController.SuppliersDetailsByID)


// EXPENSES TYPE API 
router.post('/CreateExpenseType', AuthMiddleware ,ExpenseTypeController.CreateExpenseType)
router.post('/UpdateExpenseType/:id', AuthMiddleware ,ExpenseTypeController.UpdateExpenseType)
router.get('/ListExpenseType/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,ExpenseTypeController.ListExpenseType)
router.get('/DropDownExpenseType', AuthMiddleware ,ExpenseTypeController.DropDownExpenseType)
router.get('/DeleteExpenseType/:id', AuthMiddleware ,ExpenseTypeController.DeleteExpenseType)
router.get('/ExpenseTypeDetailsByID/:id', AuthMiddleware ,ExpenseTypeController.ExpenseTypeDetailsByID)


// EXPENSES  API 
router.post('/CreateExpense', AuthMiddleware ,ExpenseController.CreateExpense)
router.post('/UpdateExpense/:id', AuthMiddleware ,ExpenseController.UpdateExpense)
router.get('/ListExpense/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,ExpenseController.ListExpense)
router.get('/DeleteExpense/:id', AuthMiddleware ,ExpenseController.DeleteExpense)
router.get('/ExpenseDetailsByID/:id', AuthMiddleware ,ExpenseController.ExpenseDetailsByID)

// PRODUCTS  API 
router.post('/CreateProduct', AuthMiddleware ,ProductsController.CreateProduct)
router.post('/UpdateProduct/:id', AuthMiddleware ,ProductsController.UpdateProduct)
router.get('/ListProduct/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,ProductsController.ListProduct)
router.get('/DeleteProduct/:id', AuthMiddleware ,ProductsController.DeleteProduct)
router.get('/ProductDetailsByID/:id', AuthMiddleware ,ProductsController.ProductDetailsByID)
router.get('/ProductsDropDown', AuthMiddleware ,ProductsController.ProductsDropDown)

// PURCHASES  API 
router.post('/CreatePurchases', AuthMiddleware ,PurchasesController.CreatePurchases)
router.get('/ListPurchase/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,PurchasesController.ListPurchase)
router.get('/DeletePurchase/:id', AuthMiddleware ,PurchasesController.DeletePurchase)


// SALES  API 
router.post('/CreateSales', AuthMiddleware ,SalesController.CreateSales)
router.get('/ListSales/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,SalesController.ListSales)
router.get('/DeleteSale/:id', AuthMiddleware ,SalesController.DeleteSale)


// RETURNS  API 
router.post('/CreateReturn', AuthMiddleware ,ReturnsController.CreateReturn)
router.get('/ListReturn/:pageNo/:perPage/:searchKeyword', AuthMiddleware ,ReturnsController.ListReturn)
router.get('/DeleteReturn/:id', AuthMiddleware ,ReturnsController.DeleteReturn)

// REPORTS API 
router.post('/ExpensesByDate', AuthMiddleware , ReportsController.ExpensesByDate)
router.post('/PurchaseByDate', AuthMiddleware , ReportsController.PurchaseByDate)
router.post('/ReturnByDate', AuthMiddleware , ReportsController.ReturnByDate)
router.post('/SalesByDate', AuthMiddleware , ReportsController.SalesByDate)


// SUMMARY API 
router.get('/ExpensesSummary', AuthMiddleware , SummaryController.ExpensesSummary)
router.get('/PurchaseSummary', AuthMiddleware , SummaryController.PurchaseSummary)
router.get('/ReturnSummary', AuthMiddleware , SummaryController.ReturnSummary)
router.get('/SalesSummary', AuthMiddleware, SummaryController.SalesSummary)


module.exports = router