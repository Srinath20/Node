const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

const app = express();

// Add middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

// Set up your routes
app.use('/admin', adminroutes);
app.use('/', shoproutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact-us.html'));
});

app.post('/contactus', (req, res) => {
    res.redirect('/success');
});

app.get('/success', (req, res) => {
    res.send('Form successfully filled');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});