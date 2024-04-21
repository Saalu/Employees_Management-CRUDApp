const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    employee_id:{
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
    location:{
        type:String,
        required: true
    },
    salary:{
        type:Number,
        required: true
    },
   
    start_date:{
        type:Date,
        default: Date.now
    },
    user_id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
},{timestamp:true})

module.exports = mongoose.model('note', noteSchema)