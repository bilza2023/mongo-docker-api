require('dotenv').config();
const mongoose = require('mongoose');
process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);      
    console.error(err.stack);
    process.exit(1);
});
//.......................................................
// mongoose.connect("mongodb://bilal:32611@localhost:27017/taleem_db");
mongoose.connect( process.env.MONGO_URI , { useNewUrlParser: true});
// mongoose.connect( proces
//mongodb://127.0.0.1:27017
// mongoose.connect( "mongodb+srv://bilza2024:bils32611@taleem-db.oyecc5h.mongodb.net/" );
const db = mongoose.connection;
db.on('error',(error)=> {throw new Error(error)} );

module.exports = db;
