const express = require('express');
const db = require('./Config/db-config');
const Routes = require('./Routes/user-route');

const app = express();
app.use(express.json());
db.connectDB();

app.use(Routes);

app.listen(3000, () => {
    console.log("Server is successfully running at port 3000")
});