// shopController.js
const path = require('path');

exports.getIndex = (req, res, next) => {
    console.log("In Main middleware");
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
};
