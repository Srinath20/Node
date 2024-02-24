const express = require('express');
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

const app = express();

// Add middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended: false}));

// Set up your routes
app.use('/admin', adminroutes);
app.use('/', shoproutes);

// Catch-all route for handling undefined routes
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});