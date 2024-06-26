const router = require('express').Router()
const employeeCtrl = require('../controllers/employeeCtrl')
const auth = require('../middleware/auth')



router.get('/limited', auth, employeeCtrl.getLimited)
router.route('/')
    .get(auth, employeeCtrl.getAll)
    // .get(auth, employeeCtrl.getLimited)
    .post(auth, employeeCtrl.create)


router.route('/:id')
    .get(auth, employeeCtrl.getOne)
    .put(auth, employeeCtrl.update)
    .delete(auth, employeeCtrl.delete)


module.exports = router

