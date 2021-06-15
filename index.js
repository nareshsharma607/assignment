const express=require("express");
const app=express();
const path=require('path')
const bodyParser = require('body-parser')

const port=8000;



app.use(express.urlencoded())
const db=require('./config/mongoose')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use('/', require('./routes/index'))















app.listen(port,()=> console.log(`server is runneng on port ${port}`))