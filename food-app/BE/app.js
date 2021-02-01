const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");

//middleware


// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }))

// parse application/json
app.use(body_parser.json())
//cors
app.use(cors());
//route
const UserRoute = require("./Route/User");
const ProductRoute = require("./Route/Product");
const CartRoute=require("./Route/Cart");
const CategoryRoute = require("./Route/Category");
const BillRoute = require("./Route/Bill");
app.use("/User",UserRoute);
app.use("/Home",ProductRoute);
app.use("/Cart",CartRoute);
app.use("/Cate",CategoryRoute);
app.use("/Bill",BillRoute);

//Title
app.get("/",(req,res,next)=>{
    res.send('<h1>Welcome to NodeJS</h1>');
})

app.get("*",(req,res,next)=>{
    res.send('Api not found');
})

module.exports = app;