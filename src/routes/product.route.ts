import express from "express"
import { addNewProduct,updateProduct,deleteProduct } from "../controllers/product.controller"

const router = express.Router()

router.post("/createNew",addNewProduct)
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;