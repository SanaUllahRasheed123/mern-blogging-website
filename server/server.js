import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const server = express();
let PORT = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

server.use(express.json());

mongoose.connect(process.env.DB_LOCATION,{
    autoIndex:true
})

server.post("/signup", (req,res) => {
    // console.log(req.body)
    // res.json(req.body)

    let {fullname,email,password} = req.body;

    //validating the date from frontend
    if(fullname.length < 3){
        return res.status(403).json({"error":"Fullname must be at least 3 letters long"})
    }
    if(!email.length){
        return res.status(403).json({"error":"Enter Email "})
    }
    if(!emailRegex.test(email)){
        return res.status(403).json({"error":"Email is Invalid"})
    }
    return res.status(200).json({"status":"okay"})
})

server.listen(PORT, ()=>{
    console.log('listening on port ->' + PORT);
})