//express
const express = require("express")
const app = express()
app.use(express.json())

//cors
const cors = require("cors")
app.use(cors())

// get Api for Frontend
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname, "public", "index.html");
});

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
app.listen(3000,()=>{
    try{
        console.log("server is running on port 3000")
    }catch(err){
        console.log(err.message)
    }
})