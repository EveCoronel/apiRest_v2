const express = require('express');
const router = express.Router();
const fs = require('fs');
const productos = require('../../data/data.json')
console.log(productos)

router.get('/', (req, res) => {
    const products = JSON.parse(fs.readFileSync('../../data/data.json', 'utf-8'));
    res.json(products);
})

router.get('/:id', (req, res) => {
    const products = JSON.parse(fs.readFileSync('../../data/data.json', 'utf-8'));
    const { id } = req.params;
    const product = products.find((product) => product.id === +(id));
    product ? res.json(product) : res.json({ error: 'producto no encontrado' })

})
router.post('/', (req, res) => {
    const products = JSON.parse(fs.readFileSync('../../data/data.json', 'utf-8'));
    const { title, price, thumbnail } = req.body;
    const nuevoProducto = {
        id: products.length + 1,
        title,
        price,
        thumbnail,
    };
    products.push(nuevoProducto);
    fs.writeFileSync('../../data/data.json', JSON.stringify(products, null, 2));
    res.json(nuevoProducto);
})

router.put('/:id', (req, res) => {
    const products = JSON.parse(fs.readFileSync('../../data/data.json', 'utf-8'));
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;

    let productsUpdate = products.map((p) => p.id === +(id) ? p = {
        id,
        title,
        price,
        thumbnail
    } : p);

    console.log(productsUpdate)
    res.json('Todo ok');
    fs.writeFileSync('../../data/data.json', JSON.stringify(productsUpdate, null, 2));
})

router.delete('/:id', (req, res) => {
    const products = JSON.parse(fs.readFileSync('../../data/data.json', 'utf-8'));
    const { id } = req.params;
    let newProducts = products.filter(item => item.id != +(id))
    console.log(newProducts)
    res.json('Todo ok');
    fs.writeFileSync('../../data/data.json', JSON.stringify(newProducts, null, 2));
})


module.exports = router;