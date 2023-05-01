const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    UserEmail: {
      type: String,
    },
    SupplierID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    VatTax: {
      type: Number,
    },
    Discount: {
      type: Number,
    },
    OtherCost: {
      type: Number,
    },
    ShippingCost: {
      type: Number,
    },
    GrandTotal: {
      type: Number,
    },
    Note: {
      type: String,
    },
    CreateDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const PurchaseModel = mongoose.model("purchases", PurchaseSchema);

module.exports = PurchaseModel;
