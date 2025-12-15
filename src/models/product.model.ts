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
  },
  description: {
    type: String,
    required: true
  }
})

const Products = mongoose.model("Product",productSchema)
export default Products

/*product document looks like
{
  "_id": "65fa9...",
  "name": "Laptop",
  "price": 1200,
  "quantity": 10,
  "category": "65fa1...",
  "description": "Dell XPS",
  "createdAt": "...",
  "updatedAt": "..."
}
*/