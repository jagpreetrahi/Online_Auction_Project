const express = require('express');
const app = express();

const {ServerConfig} = require('./config')
const UserRoute  = require('./routes');
const { connectDb } = require('./db');
const cors = require("cors");


connectDb();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/api' , UserRoute)


app.listen(ServerConfig.PORT , () => {
    console.log(`Successfully run on PORT ${ServerConfig.PORT}`)
})