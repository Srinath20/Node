const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    console.log("In Add-Product middleware");

    // Set the Content-Type header to text/html
    res.setHeader('Content-Type', 'text/html');

    // Send an HTML form to the client
    res.sendFile(path.join(rootdir,'views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body); // Log the data sent in the request body
    res.redirect('/'); // Redirect the client to the root URL
});

module.exports = router;