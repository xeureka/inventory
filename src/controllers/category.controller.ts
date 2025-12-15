 // * Add new category
 // * see existing categories
import express,{type Request, type Response} from "express"
import Catagories from "../models/catagory.model"

export const addNewCategory = async (req:Request,res:Response) => {
  try{
    const { name, description } = req.body;
    const isDuplicate = await Catagories.find({name: req.body.name})
    if (!isDuplicate){
      return res.status(400).json("Category already exist ")
    }
    let newCateogry = new Catagories({
      name,
      description
    })
    const result = await newCateogry.save()
    res.json(result).status(201)
  }catch(error){
    return res.status(500).json("Error creating new category !")
  }
}

export const seeExistingCategories = async (req:Request,res:Response) => {
  const response = await Catagories.find({})
  console.log("we reach here")
  res.json(response)
}
