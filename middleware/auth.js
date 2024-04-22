
const jwt = require('jsonwebtoken')


const verfication = async (req,res,next) =>{
    try {
        const token = req.header('Authorization')
        if(!token) return res.status(400).json({msg: 'Invalid Authentication'})

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: 'Authorization not valid'})

            req.user = user;
            next()
        })
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
  }


  const auth= (req,res,next)=>{
    const token = req.cookies.token
    if(!token) return res.status(400).json({msg:'Token not provided'})

    jwt.verify(token, process.env.TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(400).json({msg:'Invalid Authorization'})

        req.user= user;
        // res.json({status:true, user:req.user.name})

        next()
    })
  }

  module.exports = auth