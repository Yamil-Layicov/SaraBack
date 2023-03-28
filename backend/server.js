const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMidleware')
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/floorOne', require('./routes/floorOneRoute'))

app.use(errorHandler)

app.listen(port, () => console.log(`${port} running`));
