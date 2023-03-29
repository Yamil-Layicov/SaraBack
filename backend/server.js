const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMidleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/floorOne', require('./routes/floorOneRoute'))
app.use('/floorTwo', require('./routes/floorTwoRoute'))
app.use('/floorThree', require('./routes/floorThreeRoute'))

app.use(errorHandler)

app.listen(port, () => console.log(`${port} running`.red));
