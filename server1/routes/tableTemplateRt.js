const express = require("express");
const router = express.Router();
const uuid = require("uuid");

const dataRt = require('./dataRt.js')
const params=require('./params.js')

const checkNone=()=>{return (req,res,next)=>{next()}}
const checkShopToken=require('../middleware/checkShopToken')
const checkUserLevel=require('../middleware/checkUserLevel')

const param=params.tableTemplate

const routeTemplate=[    
    

    {route:"restore",type:"post", useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
    {route:"backup",type:"post", useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
   
    {route:"getcustom",type:"post", useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},

    {route:"updatetabletemplate",type:"post", useRoute:true, 
    checkAuth:checkShopToken,checkLevel:checkUserLevel},
]  
dataRt({router,param,routeTemplate})
module.exports = router;
