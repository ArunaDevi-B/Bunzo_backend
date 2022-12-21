const express = require('express');
const db = require('./Config/db-config');
const Routes = require('./Routes/user-route');
var cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
db.connectDB();


app.use(Routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is successfully running at port: ${process.env.PORT}`)
});

process.on('uncaughtException', function(err) {
    console.log('uncaught exception', err);
});