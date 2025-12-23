import express from "express"
import { listCategories,addCateogry,updateCateogry,deleteCategory } from "../controllers/category.controller";

const router = express.Router();

router.get("/list",listCategories);
router.post("/create",addCateogry);
router.post("/update/:id",updateCateogry);
router.delete("/delete/:id",deleteCategory);

export default router;
