const express=require("express");
const app=express();
const path=require("path");

app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"as.html"));
})
app.get("/apple",(req,res)=>{
    res.sendFile(path.join(__dirname,"ass.html"));
})
app.get("/orange",(req,res)=>{
    res.sendFile(path.join(__dirname,"asss.html"));
})
app.listen(3978 ,()=>{
    console.log("server is running");
})