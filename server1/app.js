const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const bodyParser = require('body-parser');

const app = express();

let temp1 
let temp2
let temp3
let temp4
let temp5
let temp6
let temp7
let temp8
let temp9
let temp10


//allow cross origin
app.use(cors());
//body parser for json data
app.use(express.json());

//body parser for form data
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));

//=====================
app.use('/upload',express.static('upload'));

const shopRt = require('./routes/shopRt');
app.use("/shop",shopRt);

const userRt = require('./routes/userRt');
app.use("/user",userRt);


const basicDataRt = require('./routes/basicDataRt');
app.use("/basicdata",basicDataRt);


const groupRt = require('./routes/groupRt');
app.use("/group",groupRt);


const productRt = require('./routes/productRt');
app.use("/product",productRt);


const customerRt = require('./routes/customerRt');
app.use("/customer",customerRt);

const billRt = require('./routes/billRt');
app.use("/bill",billRt);

const tableTemplateRt = require('./routes/tableTemplateRt');
app.use("/tabletemplate",tableTemplateRt);


app.get("/test",(req,res)=>{
    return res.status(200).json({msg:"Pass :you access to server"});
})

app.get('/vrp1rec', function(req,res) {
  console.log(req.ip)
  const tempArray=req.ip.split(":")
  temp1={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 1")
});

app.get('/vrp2rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp2={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 2")
});

app.get('/vrp3rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp3={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 3")
});

app.get('/vrp4rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp4={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 4")
});

app.get('/vrp5rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp5={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 5")
});

app.get('/vrp6rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp6={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 6")
});

app.get('/vrp7rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp7={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 7")
});

app.get('/vrp8rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp8={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 8")
});

app.get('/vrp9rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp9={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 9")
});

app.get('/vrp10rec', function(req,res) {
  const tempArray=req.ip.split(":")
  temp10={
      myip:(tempArray[tempArray.length-1]),
      timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
  }
  return res.status(200).send("record from 10")
});

app.get('/vrp1get', function(req,res) { return res.status(200).send(temp1) });
app.get('/vrp2get', function(req,res) { return res.status(200).send(temp2) });
app.get('/vrp3get', function(req,res) { return res.status(200).send(temp3) });
app.get('/vrp4get', function(req,res) { return res.status(200).send(temp4) });
app.get('/vrp5get', function(req,res) { return res.status(200).send(temp5) });
app.get('/vrp6get', function(req,res) { return res.status(200).send(temp6) });
app.get('/vrp7get', function(req,res) { return res.status(200).send(temp7) });
app.get('/vrp8get', function(req,res) { return res.status(200).send(temp8) });
app.get('/vrp9get', function(req,res) { return res.status(200).send(temp9) });
app.get('/vrp10get', function(req,res) { return res.status(200).send(temp10) });


//Serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static('../client/build'));
    app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'/../client','build','index.html'));
    })
  }

//never reach this line under development
app.use((req,res,next)=>{
    const error=new Error();
    error.status=404;
    error.message="Not Found";
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

module.exports = app;

/*
http://localhost:3000/upload/ab80a5f4-dbc0-4f69-9b77-67089b253ae1-p01.jpeg
*/