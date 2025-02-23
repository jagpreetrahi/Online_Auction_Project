const {default : mongoose}  = require('mongoose')
const bcrypt = require('bcryptjs')
const URL = 'mongodb://localhost:27017/auction?appName=MongoDB+Compass&directConnection=true&serverSelectionTimeoutMS=2000'
async function connectDb(){

    try {
        await mongoose.connect(URL)
        console.log("Successfully connected to database")
    } catch (error) {
        console.log("MongoDb connection fails:" , error.message)
    }
}

const userSchema = new mongoose.Schema({
    userEmail : {type : String , required : true , unique : true},
    password : {type : String , required : true , unique : true , minLength : 3 , maxLength : 6},
    fullName  : {type : String , required : true},
    
})

userSchema.pre('Save' , function (next){
    let user  = this;   //  user instance being save

    // hash the password if modified or new one
    if(!user.isModified('Password')) return next();

    // generate  a salt
    bcrypt.genSalt(10 , (err , salt) => {
        if(err) throw err;
        bcrypt.hash(user.password , salt , function (err, hash){
            if(err) throw err;

            user.password = hash;
            next()
        })
    })


})

const User  = mongoose.model('User' , userSchema);

module.exports = {
    User,
    connectDb
}