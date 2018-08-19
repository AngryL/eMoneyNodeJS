const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express()

const emoneyClient = require("./eMoney/EMoneyFormatter")
const tools = require("./eMoney/tools")


// const emoneyClient = require("./eMoneyStrongSoap")


app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", emoneyClient)
app.get("/tools", emoneyClient)




app.listen(3000)