const userCtrl = {
   
  
    verifiedToken: (req,res) =>{
      try {
          const token = req.header('Authorization')
          if(!token) return res.send(false)
  
          jwt.verify(token, process.env.TOKEN_SECRET, async(err, verifiedUser) =>{
              if(err) return res.send(false)
  
              const user = await Users.findById(verifiedUser.id)
              if(!user) return res.send(false)
  
              return res.send(true)
          })
          
      } catch (err) {
          return res.status(500).json({msg: err.message})
      }
  }
  }
  
  
  module.exports = userCtrl