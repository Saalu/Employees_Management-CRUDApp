const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userCtrl = {

    register: async(req,res) =>{
        try {
            const{username,email,password}=req.body

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:'Email already exist'})

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = new Users({
                username,
                email,
                password:hashedPassword
            })

            const saved = await newUser.save()

            res.json({status:true, msg:'Sign up success', data: saved})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    login: async(req,res) =>{
        try {
            const{email,password}=req.body

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg:'User does not exist'})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg:'Incorrect password'})

            const payload = {id:user._id, name:user.username}
            const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn:'1d'})

            res.cookie('token',token, {httpOnly:true})

            res.json({status:true, msg:'Login success',data:payload, token:token })
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    verifiedToken: async(req,res,next) =>{
        try {
            const token = req.cookies.token
            if(!token) return res.status(400).json({msg:'No token provided'})

            jwt.verify(token, process.env.TOKEN_SECRET,(err, verifiedUser) =>{
                if(err) return res.status(400).json({msg:'Invalid token'})

                req.user = verifiedUser;
                // res.json({status:true, user:req.user.name})
                next()
            })
        
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },
    logout: async(req,res) =>{
        try {

            res.cookie('token', '', {expires:new Date(0)})
            
            res.json({status:true, msg:'Logout success' })
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

    },


}

module.exports = userCtrl