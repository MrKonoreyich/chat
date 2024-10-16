require('dotenv').config()
const express = require('express')
const apiroute = require("./routes/");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/Error.middleware");
const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/sock');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiroute)

//middlewares
app.use(errorMiddleware)


app.get('/', (req,res,next) => {
    res.send('hello world!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
