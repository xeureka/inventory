import mongoose from "mongoose"
import Catagories from "./catagory.model"

const productSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  price : {
    type: Number,
    required: true
  },
  quantity : {
    type: Number,
    required: true
  },
  category:{
    type: mongoose.Types.ObjectId,
    ref: "Catagory",
    required: true
  }
})

const Products = mongoose.model("Product",productSchema)
export default Products