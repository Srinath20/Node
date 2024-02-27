const path = require('path');
const express = require('express');
const router = express.Router();
const rootdir = require('../util/path');

router.get('/', (req, res, next) => {
    console.log("In Main middleware");
    res.sendFile(path.join(rootdir,'views','shop.html'));//dirname points to routes folder
});

module.exports = router;