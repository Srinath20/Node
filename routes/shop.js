const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("In Main middleware");
    res.send('<h1>Hello From Express JS</h1><form action="/admin/add-product" method="GET"><p>Click here to add products</p><button type="submit">Click me</button></form>');
});

module.exports = router;