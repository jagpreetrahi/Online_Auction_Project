const express = require('express')
const router = express.Router();
const UserRoutes = require('./user')
const QuestionRoutes = require('./question');


router.use('/user' , UserRoutes)
router.use('/question' , QuestionRoutes)


module.exports = router