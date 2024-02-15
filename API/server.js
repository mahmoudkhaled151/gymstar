const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const dbConnection = require('./db/connection');
const programRouter = require('./router/programs.route');

dotenv.config();

const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())



const port = process.env.PORT || 3000

// Db connection
dbConnection.run()

app.get('/', (req, res) => res.send('Welcome to the Gym Star'))
// routers
app.use("/gym-star", programRouter);
app.listen(port, () => console.log(`server started listening on port ${port}!`))