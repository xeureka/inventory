import express, {type Request,type Response} from "express"
import Categories from "../models/category.model"
import Products from "../models/product.model"

export const listProducts = async( req: Request,res: Response) => {
    try {
        const products = await Products.find({})
        res.json(products).status(201)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}

export const addProduct = async( req: Request,res: Response) => {
    const product = req.body;

    try {
        const newProduct = await Products.create(product)

        if(!newProduct){
            return res.json({message: "Failed to create the product"}).status(404)
        }

        res.json(newProduct).status(201)

    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}

export const updateProduct = async( req: Request,res: Response) => {
    const {id} = req.params;
    const updatedData = req.body;

    try {
        const updatedProduct = await Products.findByIdAndUpdate(id,updatedData,{
            new: true,
            runValidators : true
        });

        if (!updatedProduct){
            return res.status(404).json({message:"cannot create the product"})
        }

        res.json(updatedProduct).status(200)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}
export const deleteProduct = async( req: Request,res: Response) => {
    const {id} = req.params;

    try {
        const deletedProduct = await Products.findByIdAndDelete(id);
        res.json(deletedProduct).status(200)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}
