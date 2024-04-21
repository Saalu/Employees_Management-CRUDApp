const Notes = require('../models/EmployeeModel')


const noteCtrl={
    getNotes: async(req,res) =>{
        try {
            
            const notes =  await Notes.find({user_id: req.user.id})
            const checkLenth = await notes.length
            res.json({status:true,length: notes.length, data: notes})
        } catch (err) {
        return res.status(500).json({msg: err.message})
            
        }
    },
    getNote: async(req,res) =>{
        try {
            
            const note =  await Notes.findById(req.params.id)
            res.json({status:true, data: note})
        } catch (err) {
        return res.status(500).json({msg: err.message})
            
        }
    },
    createNote: async(req,res) =>{
        try {
            const { title, content, date} = req.body

            const newNote = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })

            const saved = await newNote.save()
            res.json({msg:'New note created', data: saved})

        } catch (err) {
        return res.status(500).json({msg: err.message})
            
        }
    },
    deleteNote: async(req,res) =>{
        try {
            await Notes.findByIdAndDelete(req.params.id)
            res.json({status:true, msg: 'Deleted note successfully'})

        } catch (err) {
        return res.status(500).json({msg: err.message})
            
        }
    },
    updateNote: async(req,res) =>{
        try {
            const {title, content, } = req.body
            const id = req.params.id
            const updatedNote = await Notes.findByIdAndUpdate(
                id,
                {title, content },
                {new:true}
                )
            res.json({
                status:true,
                msg:'Updated note successfully', 
                data: updatedNote
            }) 
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    
    },
}


module.exports = noteCtrl