const express = require('express');
const router = express.Router();
const fs = require('fs');
/* let products = require('../../data/data.json') */
const Products = require('../../model/products')

const products = new Products()

router.get('/', (req, res) => {
    res.json(products.getAll());
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.getById(id)
    if (product.error) {
        res.status(404).json(product)
    } else {
        res.status(201).json(product)
    }
})

router.post('/', (req, res) => {
    let newProduct = products.save(req.body)
    if (newProduct.product) {
        res.status(201).json(newProduct);
    } else {
        res.status(400).json(newProduct);
    }
})

router.put('/:id', (req, res) => {
    let { id } = req.params;
    id = Number(id)
    let productsUpdate = products.updateById(id, req.body)
    if (productsUpdate.error) {
        res.status(400).json(productsUpdate)
    } else {
        res.status(200).json(productsUpdate)
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    /* let newProducts = products.filter(item => item.id != +(id))
    products = newProducts
    res.status(200).json({ text: 'Deleted successfully' }) */
    const product = products.getById(id)
    if (product.error) {
        res.status(404).json(product)
    } else {
        res.status(200).json(products.deleteById(id))
    }

})


module.exports = router;