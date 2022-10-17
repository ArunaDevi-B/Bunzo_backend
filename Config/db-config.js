const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/order-management', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", ()=> console.log("connection error: "));
    db.once("open", ()=> console.log("Connected successfully"));
}

module.exports = { connectDB };