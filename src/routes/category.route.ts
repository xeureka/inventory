import express from "express"
import {seeExistingCategories, addNewCategory } from "../controllers/category.controller"

const router = express.Router()

router.get("/list",seeExistingCategories)
router.post("/new",addNewCategory)

export default router;