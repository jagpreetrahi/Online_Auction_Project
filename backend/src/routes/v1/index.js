const express = require('express')
const router = express.Router();
const UserRoutes = require('./user')
const QuestionRoutes = require('./question');
const AuctionRoutes = require('./auctionItem')


router.use('/user' , UserRoutes)
router.use('/question' , QuestionRoutes)
router.use('/auctionItem' , AuctionRoutes)


module.exports = router