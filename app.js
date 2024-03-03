const express = require('express');
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')))//Registering a static folder
app.use(bodyParser.urlencoded({ extended: false }));/*
setting up middleware for the application to parse incoming request bodies that have a URL-encoded format. 
The extended: false option means that only primitive data types (like strings, numbers, and booleans) will be parsed. 
Complex data types, such as objects and arrays, will not be parsed.
*/

app.use('/admin', adminroutes);
app.use('/', shoproutes);

// Catch-all route for handling undefined routes
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});