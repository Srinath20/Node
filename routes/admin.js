const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In Add-Product middleware");

    // Set the Content-Type header to text/html
    res.setHeader('Content-Type', 'text/html');

    // Send an HTML form to the client
    res.send('<form action="/admin/add-product" method="POST"><p>Product Name</p><input type="text" name="product"><br><p>Product Size</p><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body); // Log the data sent in the request body
    res.redirect('/'); // Redirect the client to the root URL
});

module.exports = router;