import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description : {
    type: String,
    required: true,
    time: true
  },
},
{
  timestamps: true
})

const Catagories = mongoose.model("Catagory",categorySchema)
export default Catagories;

/* Categories document

{
  "_id": "65fa1...",
  "name": "Electronics",
  "description": "Electronic devices",
  "createdAt": "...",
  "updatedAt": "..."
}
*/