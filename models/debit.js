const { Schema, model } = require('mongoose')

const debitSchema = new Schema({
     dateOfExpense: { type: Date, default: Date.now },
     payee: String, 
     description: String,
     usedFor: String,
     numUnits: Number,
     unitMeasure: String,
     subTotal: Number,
     tax: Number,
     shipping: Number,
     total: Number,
     account: String, 
     barter: Boolean
}, {
  timestamps: true
})

module.exports = model('Debit', debitSchema)
