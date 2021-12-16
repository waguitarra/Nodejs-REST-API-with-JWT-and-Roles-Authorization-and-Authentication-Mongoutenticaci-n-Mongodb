import { Router } from "express";
const router = Router()

import * as productsCtrl from "../controllers/products.controllers";

router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductsById)

router.put('/:productId', productsCtrl.UpdateProductById)

router.delete('/:productId', productsCtrl.deleteProductById)

export default router;
