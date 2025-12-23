import express from "express"
import { listProducts,addProduct,updateProduct,deleteProduct } from "../controllers/product.controller"

const router = express.Router()

router.get('/list',listProducts);
router.post('/add',addProduct);
router.post('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);

export default router
