const express = require('express');
const router = express.Router();
const fs = require('fs');
let products = require('../../data/data.json')

router.get('/', (req, res) => {
    res.json(products);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === +(id));
    product ? res.json(product) : res.json({ error: 'producto no encontrado' })

})
router.post('/', (req, res) => {

    const { title, price, thumbnail } = req.body;
    const nuevoProducto = {
        id: products.length + 1,
        title,
        price,
        thumbnail,
    };
    products.push(nuevoProducto);
    res.json(nuevoProducto);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;

    let productsUpdate = products.map((p) => p.id === +(id) ? p = {
        id,
        title,
        price,
        thumbnail
    } : p);

    products = productsUpdate
    res.json('Todo ok');

})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let newProducts = products.filter(item => item.id != +(id))
    console.log(newProducts)
    res.json('Todo ok');
    products = newProducts
})


module.exports = router;