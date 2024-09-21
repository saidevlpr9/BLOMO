import mongoose from "mongoose";

export const  connectMongoDb = async()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000,
      socketTimeoutMS: 60000,
    });
    console.log("Connected to Mongodb")
  }catch(error){
    console.log("Error Connecting to Monogodb",error)

  }
}