const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const goodsRoute = require('./routes/goods');
const indexRoute = require('./routes')
const database = require('./db')


const { PORT,MONGO_URL } = config;
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

app.use("/",indexRoute);
app.use("/goods",goodsRoute);

database()
.then( () => {
    app.listen(PORT, () => console.log("CONNECTING TO PORT"))
})
.catch(err => {
    console.error(err)
    process.exit(1)
})
