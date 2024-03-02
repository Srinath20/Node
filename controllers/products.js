const path = require('path');
const products = [];

exports.getAddProduct = (req, res, next) => {
    console.log("In Add-Product middleware");
    res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log("In add-product-2 middleware");
    console.log(req.body);
    console.log(req.body.title);
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    console.log("In Main middleware");
    res.sendFile(path.join(__dirname, '../views', 'shop.html'));
}

exports.products = products;
