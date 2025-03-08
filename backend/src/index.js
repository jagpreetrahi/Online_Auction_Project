const express = require('express');
const app = express();

const {ServerConfig} = require('./config')
const UserRoute  = require('./routes');
const { connectDb } = require('./db');
const cors = require("cors");
const path  = require("path")


connectDb();
app.use(cors({origin : "https://online-auction-project-jagpreet-singhs-projects.vercel.app/"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/api' , UserRoute)
app.use('/static' , express.static(path.join(__dirname , 'public')))


app.listen(ServerConfig.PORT , () => {
    console.log(`Successfully run on PORT ${ServerConfig.PORT}`)
})