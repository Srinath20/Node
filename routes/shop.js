const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    console.log("In Main middleware");
  //  res.sendFile('/views/shop.html'); Here / points to root folder of os but not project. Import path module to construct a path to this project directory.
  //  res.sendFile(path.join(__dirname,'views','shop.html')); Here __dirname points to the root folder in which this file is there if.e routes folder.
      res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = router;