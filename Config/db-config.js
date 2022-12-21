const mongoose = require('mongoose');

function connectDB(){
    console.log(process.env);
    mongoose.connect(process.env.Mongo_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", ()=> console.log("connection error: "));
    db.once("open", ()=> console.log("Connected successfully"));
}

module.exports = { connectDB };