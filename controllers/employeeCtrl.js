const Employee = require('../models/EmployeeModel')


const employeeCtrl = {

    create: (req,res) =>{
        try {
            const{username,email,password}=req.body

            res.json({status:true, msg:'Sign up success', data: req.body})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    getAll: (req,res) =>{
        try {
            const{username,email,password}=req.body

            res.json({status:true, msg:'Sign up success', data: req.body})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    getOne: (req,res) =>{
        try {
            const{username,email,password}=req.body

            res.json({status:true, msg:'Sign up success', data: req.body})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    delete: (req,res) =>{
        try {
            const{username,email,password}=req.body

            res.json({status:true, msg:'Sign up success', data: req.body})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    update: (req,res) =>{
        try {
            const{username,email,password}=req.body

            res.json({status:true, msg:'Sign up success', data: req.body})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},

}

module.exports =employeeCtrl