

const products = [
    { id: 1, name: 'pen', price: 10 },
    { id: 2, name: 'phone', price: 20 },
    { id: 3, name: 'jug', price: 30 },
]

export function getProducts(req, res) {
    res.status(200).json(products)
}
export function getProductById(req, res) {
    const { id } = req.params
    console.log(id)
    const prod = products.find(ele => ele.id == id)
    if (!prod) {
        res.status(404).send('product not found')
        return
    }
    res.status(200).json(prod)
}
export function addProdcut(req, res) {
    const data= req.body
    const obj={
        id:products.length+1,
        ...data
    }
    products.push(obj)
    res.status(201).json(products)
}
export function deleteProdcut(req, res) {
    const {id}=req.params
    const prods=products.filter(p=>p.id!=id)
    res.status(200).json(prods)
}