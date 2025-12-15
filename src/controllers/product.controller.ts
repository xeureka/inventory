import express from "express"
import Products from "../models/product.model"
 
 export const addNewProduct = async (req: express.Request,res:express.Response) => {
   try{
     const product = await Products.create(req.body)
     res.status(201).json(product)
   }catch(error){
     return res.status(500).json("Failed to add new product")
   }
 }


export const updateProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;

    const product = await Products.findOneAndUpdate(
      { _id: id },          // filter
      { $set: req.body },   // update
      {
        new: true,          // return updated document
        runValidators: true // validate schema
      }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error updating product" });
  }
};
 export const deleteProduct = async (
   req: express.Request,
   res: express.Response
 ) => {
   try {
     const id = req.params.id;
 
     const product = await Products.findOneAndDelete({ _id: id });
 
     if (!product) {
       return res.status(404).json({ message: "Product not found" });
     }
 
     res.status(200).json({
       message: "Product deleted successfully",
       data: product,
     });
   } catch (error) {
     res.status(400).json({ message: "Error deleting product" });
   }
 };