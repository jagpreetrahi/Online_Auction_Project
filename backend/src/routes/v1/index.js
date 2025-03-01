const express = require('express')
const router = express.Router();
const UserRoutes = require('./user')
const QuestionRoutes = require('./question');
const AuctionRoutes = require('./auctionItem')
const ContactRoutes = require('./contact')


router.use('/user' , UserRoutes)
router.use('/question' , QuestionRoutes)
router.use('/auctionItem' , AuctionRoutes)
router.use('/contact' , ContactRoutes)


module.exports = router