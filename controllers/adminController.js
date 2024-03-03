// adminController.js
const path = require('path');

exports.getAddProduct = (req, res, next) => {
    console.log("In Add-Product middleware");
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    console.log("In add-product-2 middleware");
    console.log(req.body); // Log the data sent in the request body
    res.redirect('/');
};
