const express = require('express');
const db = require('./Config/db-config');
const Routes = require('./Routes/user-route');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
db.connectDB();

app.use(Routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is successfully running at port: ${process.env.PORT || 3000}`)
});

process.on('uncaughtException', function(err) {
    console.log('uncaught exception', err);
});