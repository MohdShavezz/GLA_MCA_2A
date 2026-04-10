import express from 'express'
import { addProdcut, deleteProdcut, getProductById, getProducts, updateProduct } from '../controller/product.js'


const router=express.Router()

router.route('/products').get(getProducts)  //http://localhost:3000/api/products GET
router.route('/product/:id').get(getProductById).delete(deleteProdcut).put(updateProduct)  //http://localhost:3000/api/product/1 GET getProductById
router.route('/product').post(addProdcut)  //http://localhost:3000/api/addproduct POST addProduct


export default router