//express
const express = require("express")
const app = express()
app.use(express.json())

//dotenv
require("dotenv").config()
const Port  = process.env.port

//cors
const cors = require("cors")
app.use(cors())

//Base API
app.get("/",(req,res)=>{
    res.json("WELCOME TO BASE API")
})


//establishing server
app.listen(Port,()=>{
    try{
        console.log(`server is running at ${Port}`)
    }catch(err){
        console.log(err.message)
    }
})