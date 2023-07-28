const { Schema, model } = require('mongoose')

const debitSchema = new Schema({
     dateOfExpense: { type: Date, default: Date.now },
     payee: { type: String }, 
     description: { type: String },
     usedFor: { type: String },
     numUnits: { type: Number },
     unitMeasure: { type: String },
     subTotal: { type: Number },
     tax: { type: Number },
     shipping: { type: Number },
     total: { type: Number },
     account: { type: String }, 
     barter: Boolean
}, {
  timestamps: true
})

module.exports = model('Debit', debitSchema)
