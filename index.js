const express = require('express');
const db = require('./Config/db-config');
const Routes = require('./Routes/user-route');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
db.connectDB();

app.use(Routes);
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is successfully running at port: ${PORT}`)
});