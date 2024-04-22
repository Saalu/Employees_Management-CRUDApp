const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')


router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.post('/logout', userCtrl.logout)


router.get('/verify',userCtrl.verifiedToken)


// router.get('/verify', auth, (req,res)=>{
//     console.log(req.user)
//     res.json({info: req.user})
// })




module.exports = router

