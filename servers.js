console.log("pret");
const express =require("express");
const app =express()
const {MongoClient} = require("mongodb");

const url ="mongodb+srv://prethega:<password>@cluster0.a4chafd.mongodb.net/?retryWrites=true&w=majority"

const dbname = "test";
let db =""

async function connectDb(){
 try{

    const client = await MongoClient.connect(url);
    console.log("connect to mangodb");
    db = client.db(dbname);
 }
 catch(error){
    console.log(error);

 }

}
connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("server running");
    })
})
app.get("/",async(req,res)=>{
    const data ={name:"etho",username:"therla");
    const  result = await db.collection("user_sample").insertion(data);
    console.log("data inserted");
    res.send("data inserted");

        
    }
})

})
