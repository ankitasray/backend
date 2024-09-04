//require('dotenv').config({path : './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path : './env'
})
connectDB();



















// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// // function connectDB(){

// // }
// const app = express()


// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.error("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error: ", error);
//         throw error
//     }
// })()