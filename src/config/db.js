import mongoose from "mongoose"; 
import dotenv from "dotenv";
 import express from "express"; dotenv.config();
 const mongodb="mongodb+srv://"
 const app=express

  const PORT =process.env.PORT 
  const connectDB=()=>{ 
    // console.log(process.env.db_username,process.env.db_password,process.env.db_name) 
 const mongoDbURI=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@recpie1.doxlsfc.mongodb.net/${process.env.DB_NAME}?appName=Recpie1`
 mongoose .connect(mongoDbURI) 
 .then(()=>
    console.log("MongoDB connected"))
  .catch((error)=>console.log("connection error",error)) }
  export default connectDB;