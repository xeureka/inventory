import mongoose from "mongoose"

export async function connectdb(){
  try{
    await mongoose.connect(Bun.env.MONGO_URI!)
    console.log('db connected')
  }catch(error){
    console.log("Error connecting db")
    console.log(error)
  }
}

export default connectdb;