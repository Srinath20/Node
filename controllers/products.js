const path = require('path');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log("In Add-Product middleware");
    res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log("In add-product-2 middleware");
    console.log(req.body);
    console.log(req.body.title);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    console.log("In Main middleware");
    res.sendFile(path.join(__dirname, '../views', 'shop.html'));
    console.log(Product.fetchAll());
    const products = Product.fetchAll();
}
