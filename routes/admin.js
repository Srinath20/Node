const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req, res, next) => {
    console.log("In Add-Product middleware");

    // Send an HTML form to the client
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log("In add-product-2 middleware");
    console.log(req.body); // Log the data sent in the request body
    res.redirect('/'); // Redirect the client to the root URL
});

module.exports = router;