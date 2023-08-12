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

//APi for posting JSON
app.post("/post",(req,res)=>{
   
    try {
         //checking valid JSON or not
        const payload = req.body
        if(typeof payload === 'object' && payload !== null){
            res.status(200).json(payload)
        }else{
            res.status(400).json({ error: 'Invalid JSON format' })
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
   
})


//establishing server
app.listen(Port,()=>{
    try{
        console.log(`server is running at ${Port}`)
    }catch(err){
        console.log(err.message)
    }
})