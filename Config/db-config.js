const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb+srv://Aruna:Aruna123@cluster0.ndwq8ot.mongodb.net/order_management', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", ()=> console.log("connection error: "));
    db.once("open", ()=> console.log("Connected successfully"));
}

module.exports = { connectDB };