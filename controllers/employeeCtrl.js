const Employees = require('../models/EmployeeModel')


const employeeCtrl = {

    create: async(req,res) =>{
        try {
            const{fullname, position,department,salary, location}=req.body

            const newEmployee = new Employees({
                employeeID: Math.floor(Math.random() * 110) ,
                fullname,
                position,
                department,
                salary ,
                location,
                createdBy_id:req.user.id,
                createdBy:req.user.name,
            })

            const saved = await newEmployee.save()

            res.json({status:true, msg:'New employee added', data: saved})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
},
    getAll: async (req,res) =>{
        try {
            const data = await Employees.find()

            res.json({status:true,length:data.length, msg:'All employees fetched successfully', data:data})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    getLimited: async (req,res) =>{
        try {
            const data = await Employees.find({createdBy_id: req.user.id })

            res.json({status:true,length:data.length, msg:'Fetch limited to creator', data: data})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    getOne: async(req,res) =>{
        try {
            const data = await Employees.findById(req.params.id)

            res.json({status:true, msg:'Sign up success', data: data})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    delete: async(req,res) =>{
        try {
             await Employees.findByIdAndDelete(req.params.id)

            const data = await Employees.find()

            res.json({status:true,length:data.length, msg:'Deleted successfully'})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},
    update: async (req,res) =>{
        try {
            const{EmployeeID,fullname, position,department,salary, location,startDate,}=req.body
            const id = req.params.id
            const dataSet = {
                EmployeeID,
                fullname,
                position,
                department,
                salary,
                location,
            }

            const updatedData = await Employees.findByIdAndUpdate(id,dataSet,{new:true})

            
            res.json({status:true, msg:'Update success', data: updatedData})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }

},

}

module.exports = employeeCtrl