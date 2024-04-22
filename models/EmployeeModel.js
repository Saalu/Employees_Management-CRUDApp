const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    employeeID:{
        type:Number,
        required: true
    },
    fullname:{
        type:String,
        required: true
    },
    position:{
        type:String,
        required: true
    },
    department:{
        type:String,
        required: true
    },
    
    salary:{
        type:Number,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    startDate:{
        type:Date,
        default: Date.now
    },
    createdBy_id:{
        type:String,
        required: true
    },
    createdBy:{
        type:String,
        required: true
    },
},{timestamp:true})

module.exports = mongoose.model('employee', employeeSchema)