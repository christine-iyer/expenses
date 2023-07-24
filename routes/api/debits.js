const router = require('express').Router()
const debitCtrl = require('../../controllers/api/debits')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/debits/:id
DELETE
destroy debit
*/
router.delete('/:id', checkToken, ensureLoggedIn, debitCtrl.destroyDebit, debitCtrl.respondWithDebit)
/*
/api/debits/:id
PUT
update debit
*/
router.put('/:id', checkToken, ensureLoggedIn, debitCtrl.updateDebit, debitCtrl.respondWithDebit)
/*
/api/debits
POST
create debit
*/
router.post('/', checkToken, ensureLoggedIn, debitCtrl.createDebit, debitCtrl.respondWithDebit)

module.exports = router
