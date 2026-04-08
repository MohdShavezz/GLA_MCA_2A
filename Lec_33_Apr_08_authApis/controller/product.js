import { Product } from "../model/Product.js"

export async function getProducts(req, res) {
    try {
        const prods = await Product.find()
        res.status(200).json(prods)
    } catch (error) {
        console.log('error in getProducts', error)
    }
}

export async function addProdcut(req, res) {
    try {
        const data = req.body
        const prod = await Product.insertOne(data)
        res.status(201).json(prod)
    } catch (error) {
        console.log('error in addProdcut', error)
    }
}
export async function getProductById(req, res) {
    const { id } = req.params
    try {
        const prod = await Product.findById(id)
        res.status(201).json(prod)
    } catch (error) {
        console.log('error in getProductById', error)
    }
}

export async function deleteProdcut(req, res) {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).send('product deleted.')
    } catch (error) {
        console.log('error in deleteProdcut', error)
    }
}
export async function updateProduct(req, res) {
    try {
        const { id } = req.params
        const { name, price } = req.body
        // const prod=await Product.findByIdAndUpdate(id,{name,price}) //old data
        const updatedProduct=await Product.findByIdAndUpdate(id,{name,price},{new:true}) //new data
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log('error in updateProduct', error)
    }
}

