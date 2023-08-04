import mongoose from 'mongoose'
import  env from 'dotenv'
env.config() 


const url =  process.env.MONGOOSE_URL

mongoose.connect(url).then(()=>{
    console.log("mongodb connected successfully")
}).catch(err=>console.log(err))