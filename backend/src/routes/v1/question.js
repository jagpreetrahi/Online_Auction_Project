const {Question} = require('../../db')
const express = require('express');
const router = express.Router();

router.post('/newques' , async(req , res) => {
    const question = req.body.question;
    const answer = req.body.answer;

    if(question && answer){
        try {
            await Question.create({
                question : question,
                answer : answer
            })

            res.status(200).json({
                message : "Question Created Successfully"
            })
            
        } catch (error) {
            return res.status(500).json({
                message : error.message
            })
        }
    }
})

router.get('/answer' , async(req , res) => {
    
      const questionText = req.query.ques
      
    try {
        const questionData  = await Question.findOne({
            question : questionText
        })

        if(!questionData){
            return res.status(404).json({
                message : "Question not found"
            })
        }

        return res.status(200).json({
             question : questionData.question,
             answer  : questionData.answer
            
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }


})

module.exports = router;