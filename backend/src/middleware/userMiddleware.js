const jwt = require('jsonwebtoken');
const {JWT} = require('../config')

const userValidate = (req , res ,next) => {
    const userAuth = req.header.autorization;

    if(!userAuth || userAuth.startsWith('Bearer')){
        return res.status(400).json({
            message : "Header not provided"
        })
    }

    try {
        const payload = userAuth.split(' ')[1];
        const decode = jwt.verify(payload , JWT.JWT_SECRET);

        if(decode.userId){
            req.userId = decode.userId;
            next();
        }
        else{
            return res.status(403).json({});
        }

    } catch (error) {
        return res.status(403).json({
            error : error
        })
    }
}


module.exports = {
    userValidate
}