import express,{type Request,type Response} from "express";
import Categories from "../models/category.model";

export const listCategories = async (req:Request,res:Response) => {
    try {
        const availableCategories = await Categories.find({});
        res.status(200).json(availableCategories)
        
    } catch (error) {
        console.log(error);
        return res.json(error).status(500)
    }
}

export const addCateogry = async (req:Request,res:Response) => {
    const categoryInput = req.body;
    try {
        const newCateogry = await Categories.create(categoryInput);
        res.status(201).json(categoryInput)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}

export const updateCateogry = async (req:Request,res:Response) => {
    const updatedData = req.body;
    const {id} = req.params;
    try {
        const updatedCategory = await Categories.findByIdAndUpdate(id,updatedData,{
            new: true,
            runValidators : true
        });

        if (!updatedCategory){
            return res.status(404).json({message: "Cateogry Not Found !"})
        }

        res.json(updatedCategory).status(200)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}

export const deleteCategory = async (req:Request,res:Response) => {
    const {id} = req.params;
    try {
        const deletedCategory = await Categories.findByIdAndDelete(id);
        res.json({message: "Category deleted",deletedCategory}).status(200)
    } catch (error) {
        console.log(error)
        return res.json(error).status(500)
    }
}
