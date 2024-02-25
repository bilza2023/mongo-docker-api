require('dotenv').config();
const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require("./db.js");
// const {DB_URL} = require("./lib/config.js");
/////////////////////////////////////////////----->>>>
const auth  = require('./auth/auth.js');
const admin = require('./admin/admin.js');
const init = require('./admin/init.js');
////////////////////////////////////////////////
const cookieParser = require('cookie-parser');
const PORT = 5000;
////////////////////////////////////////////////////
// debugger;
const app = express()
app.use(cookieParser());
//..
app.use(express.json());
app.use(cors( )); //working
app.use(express.urlencoded({ extended: true }));

//.. Route middlewares--/////////////////////////////////////
app.use("/auth",auth);
app.use("/admin",admin);
app.use("/init",init);

///////////////////////////Routes////////////////////////
app.get('/', async (req, res) =>{
    res.status(200).json({success :true ,  message : "Welcome to Node-Mongo Docker API!!!"});
});
///////////////////////////////////////////////////////////////////////
db.once('open',()=> {
    console.log("MongoDb ===> connection established")
    app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)});
});
///////////////////////////////////////////////////////////////////////
  



