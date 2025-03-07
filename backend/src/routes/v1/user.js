const express = require('express')
const {z} = require('zod');
const jwt = require('jsonwebtoken');
const {User} = require('../../db')
const bcrypt = require('bcryptjs')
const {JWT} = require('../../config');
const router = express.Router();


//zod schema  for userSignIn

const userSignInValidate = z.object({
     userEmail : z.string().email({message : "Invalid Email"}),
     password : z.string().min(6 , {message : "Password length should be minimum 6"})
})

router.post('/signIn' , async (req , res) => {
    
    try {
        const userDetail = userSignInValidate.safeParse(req.body);
        
        if(!userDetail.success){
            return res.status(400).json({
                message : userDetail.error.errors
            })
        }

        // check whether user exists or not
        const existingUser =  await User.findOne({
            userEmail : req.body.userEmail
        })
        
        
        if(!existingUser){
            return res.status(401).json({
                message : "Invalid user or password"
            })
        }

        //compare the password
        const isValidPassword = await bcrypt.compare(req.body.password , existingUser.password);
        
        if(!isValidPassword){
            return res.status(401).json({
                message : "Invalid Email or password"
            })
        }

        // generate token
        const token  = jwt.sign({userId : existingUser._id} , JWT.JWT_SECRET)


        return res.status(200).json({
            message : "Login SuccessFully",
            token
        })
    } catch (error) {
        console.error("SignIn Error:", error);  
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message  // Send a clear error message
        });
    }

})

// zod schema for userSignUp 

const userSignUpValidate = z.object({
    fullName : z.string(),
    userEmail :  z.string().email(),
    password : z.string().min(6 , {message  : "Length should be minimum 6"})

})

router.post('/signUp' , async (req, res) => {

    try {
        const userData = userSignUpValidate.safeParse(req.body);
        
        if(!userData.success){
            return res.status(400).json({
                message : userData.error.errors
            })
        }

        // check for existing user
        const userExists = await User.findOne({
            userEmail : req.body.userEmail
        })
        

        if(userExists){
            return res.status(400).json({
                message : "User Already Exist"
            })
        }
        

        // create a new user
        const new_user  = await User.create({
            userEmail : req.body.userEmail,
            fullName : req.body.fullName,
            password : req.body.password

        })

        


        

        // generate a token 
        const token = jwt.sign({userId : new_user._id} , JWT.JWT_SECRET)

        return res.status(200).json({
            message : "User Created Successfully",
            user : new_user,
            fullName : new_user.fullName,
            token : token 
        })
    } catch (error) {
        console.log("Error is " , error)
         return res.status(500).json({
             message : "Internal Server Error"
         })
    }
})

module.exports = router;
