import mongoose, { model,Schema,Document } from "mongoose";

type CategoryType = typeof mongoose.Schema.ObjectId;

interface ProductType extends Document{
    name: string,
    description: string,
    itemCount: number,
    category: CategoryType,
    createdDate: Date,
    updatedDate: Date
}

const productSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: [true,"name of item is required"],
    trim : true
  },
  description:{
    type: String,
    required: [true, "description of item is required"],
    trim: true
  },
  itemCount: {
    type: Number,
    required: [true, "itemCount is required"]
  },
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  updatedDate:{
    type: Date,
    default: Date.now
  }
})

const Products = model("Product",productSchema)

export default Products;
