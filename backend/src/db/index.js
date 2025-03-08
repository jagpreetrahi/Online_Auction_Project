const {default : mongoose}  = require('mongoose')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv');
dotenv.config();

async function connectDb(){

    try {
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
        console.log("✅ Connected to MongoDB Atlas")
    } catch (error) {
        console.log("MongoDb connection fails:" , error.message)
    }
}

const userSchema = new mongoose.Schema({
    userEmail : {type : String , required : true , unique : true},
    password : {type : String , required : true , unique : true , minLength : 3 , maxLength : 6},
    fullName  : {type : String , required : true},
    
})

userSchema.pre('save' , async function (next){
    let user  = this;   //  user instance being save

    // hash the password if modified or new one
    if(!user.isModified('password')) return next();

    // generate  a salt
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password , salt);
        next();
    } catch (error) {
        console.log("Error is ", error);
        return next(error);
    }
    
       
})

const QuestionSchema = new mongoose.Schema({
     question : {type : String , required : true , unique : true},
     answer : {type : String , required : true , unique : true}
})

const AuctionItemSchema = new mongoose.Schema({
    itemName : {type : String , requiresd : true , unique : true},
    itemDescription : {type  : String , requiresd : true , unique : true},
    highestBidder : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    currentBid : {type : Number , required : true , unique : true},
    closingTime : {type : Date , required : true},
    isClosed : {type : Boolean , required : true},
    imageURL : {type : String , required : true}

})

const ContactSchema = new mongoose.Schema({
    userName : {type : String , required : true , unique : true},
    userEmail : {type : String , required : true , unique : true},
    description : {type : String , required : true , unique : true}

})

const User  = mongoose.model('User' , userSchema);
const Question = mongoose.model('Question' , QuestionSchema)
const AuctionItem = mongoose.model('AuctionItems' , AuctionItemSchema)
const ContactDetail = mongoose.model('ContactDetail' , ContactSchema)

module.exports = {
    User,
    connectDb,
    Question,
    AuctionItem,
    ContactDetail

}   