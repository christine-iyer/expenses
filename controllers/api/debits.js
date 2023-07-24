require('dotenv').config()
const Debit = require('../../models/debit')
const User = require('../../models/user')

// delete debit
// create debit
// update debit

const destroyDebit = async (req, res, next) => {
  try {
    const deletedDebit = await Debit.findByIdAndDelete(req.params.id)
    res.locals.data.debit = deletedDebit
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const updateDebit = async (req, res, next) => {
  try {
    const updatedDebit = await Debit.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.locals.data.debit = updatedDebit
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const createDebit = async (req, res, next) => {
  try {
    const createdDebit = await Debit.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.bookmarks.addToSet(createdDebit)
    await user.save()
    res.locals.data.debit = createdDebit
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const respondWithDebit = (req, res) => {
  res.json(res.locals.data.debit)
}

module.exports = {
  destroyDebit,
  updateDebit,
  createDebit,
  respondWithDebit
}
