const express = require('express');
const router = express.Router();
const {z} = require('zod');
const {ContactDetail} = require('../../db')


// zod schema validation
const contactBody = z.object({
    userName : z.string(),
    userEmail : z.string().email({message : "Invalid Email Address"}),
    description : z.string()
})
router.post('/user' , async (req ,res) => {

    try {
        const contactData =  contactBody.safeParse(req.body);
        if(!contactData.success){
            return res.status(401).json({
                message : "Invalid User Details"
            })
        }

       

        // create a schema for user
        const userSchema = await ContactDetail.create({
               userName : req.body.userName,
               userEmail : req.body.userEmail,
               description : req.body.description
        })

        await userSchema.save();

        return res.status(200).json({
            message : "Your request send successfully with your current query",
            userQuery : userSchema.description
        })

    } catch (error) {
        console.log("Error is " , error);
        return res.status(500).json({
            error : error.message
        })
    }

})





module.exports = router


