
 const jwt = require('jsonwebtoken');

 
 const isAuth =(req,res,next)=>{
   const authorization = req.headers.authorization;
   if(authorization){
     const token = authorization.slice(5,authorization.length); // mimi token
     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
       if(err){res.status(401).send({msg:"Invalid Token"})
      } else{
       req.user=decode;
       next();
     }
     
      });
   }else {res.status(401).send({msg:"No token"});
  }
 };



 
 module.exports =  isAuth;