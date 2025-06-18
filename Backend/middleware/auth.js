const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{

    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if(!token){
        return res.status(404).json({msg:" Access Denied"})
    }

    try{
         const decoded = jwt.verify(token, "secretjwt")
            req.user = decoded;
            next();
    } catch(err){
return res.status(500).json({msg:"Invalid Token"})
    }

}

module.exports = verifyToken;