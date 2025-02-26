const express = require('express');
const router = express.Router();
const {AuctionItem} = require('../../db')
const  {z}  = require('zod')
const {UserMiddleware} = require('../../middleware');
const {default : mongoose} = require('mongoose');


// zod schema for  the auction items details
const auctionBody = z.object({
    itemName : z.string(),
    itemDescription : z.string(),
    highestBidder : z.string(),
    currentBid : z.number(),
    isClosed : z.boolean(),
    closingTime :  z.string().datetime()

})

router.post('/auction', UserMiddleware.userValidate , async (req, res) => {
    
    try {
        //validate the schema
        const itemsDetails = await auctionBody.safeParse(req.body);
        
        if(!itemsDetails.success){
            return res.status(400).json({
                message : "Invalid details for items"
            })
        }

        // Whether the item is already present or not
        const existingItem = await AuctionItem.findOne({
            itemName : req.body.itemName 
        })
        
        
        if(existingItem){
            return res.status(400).json({
                message : "Item already exists"
            })
        }

        // Ensure the highestBidder have valid objectId
        if (!mongoose.Types.ObjectId.isValid(req.body.highestBidder)) {
            return res.status(400).json({ message: "Invalid highestBidder ID" });
        }

        // create a new item
        const new_item = await AuctionItem.create({
            itemName : req.body.itemName,
            itemDescription : req.body.itemDescription,
            currentBid : req.body.currentBid,
            highestBidder : req.body.highestBidder, 
            closingTime : req.body.closingTime,
            isClosed : req.body.isClosed

        })

         // Populate highestBidder field to get user details
         const populatedItem = await new_item.populate("highestBidder", "fullName");

         
       
        
        // saving the new_item in database
        await new_item.save();
        

        return res.status(200).json({
            message : "Items created successfully",
            item : populatedItem
        })

    } catch (error) {
        console.log("Error is :" , error)
        return res.status(500).json({
            error : error.message
        })
    }

});

// get all the auctions 
router.get('/auctions',async (req , res) => {

    try {
        const totalItems = await AuctionItem.find();  

        return  res.status(200).json(totalItems)
    } catch (error) {
        return res.status(500).json({
            error : error.message
        })
    }
})

// get a single auction Item by id

router.get('/auction/:id' , async(req , res) => {
    
    try {
        const singleItem = req.params.id;

        const item = await AuctionItem.findById(singleItem);
        if(!item){
            return res.status(404).json({
                message : "Item is not exist"
            })
        }

    } catch (error) {
        
    }
})

//  create bidding on an items by unique id
router.post('/bid/:id' , UserMiddleware.userValidate , async(req , res) => {

    try {
        const {id} = req.params;
        const {bid} = req.body;

        // find the auction item
        const findItem = await AuctionItem.findById(id);
        if(!findItem){
            return res.status(404).json({
                message : 'Auction Item is not Found'
            })
        }

        //check the item is closed or not
        if(!findItem.isClosed){
            return res.status(200).json({
                message : "Auction  closed"
            })
        }
        // check the closing time of item
        if(new Date() > new Date(findItem.closingTime)){
            findItem.isClosed = true;
            await findItem.save();
            return res.status(200).json({
                message : "Auction timing is over",
                winner : findItem.highestBidder
            })
        }

        if(bid > findItem.currentBid){
            findItem.currentBid = bid;
            findItem.highestBidder = req.user.fullName
            await findItem.save();
            return res.status(200).json({
                message : "Bid is Successfully" , 
                item : findItem
            })
        }

    } catch (error) {
        console.log("Bidder error is: " , error.message)
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
})

module.exports = router;