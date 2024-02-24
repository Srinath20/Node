const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/add-product',(req,res,next) =>{
    console.log("In Add-Product middle ware");
    res.setHeader('Content-Type', 'text/html');
    res.send('<form action="/product" method="POST"><p>Product Name</p><input type="text" name="product"><br><p>Product Size</p><input type="text" name="size"><button type="submit">Add Product</button></form>'); // When we are sending response, we are not looking for next middle ware function and sending response to end user.
})
app.post('/product',(req,res,next) =>{ //app.post and app.get is similar to app.use but app.post is used only for incoming post requests and app.get for only incoming get requests
    console.log(req.body) //We are using npm body-parser external package.
    res.redirect('/');
})
// here, '/' means any url starting with /. As all url or routes starts with /, to avoid the same page to load everytime,...we are adding the add-product first and not calling next() as we don't the response to be moved to next middle ware function.
app.use('/',(req,res,next) =>{
    console.log("In Main middle ware");
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello From Express JS</h1>'); // When we are sending response, we are not looking for next middle ware function and sending response to end user.
   // res.next()  You need to call next() to pass control to the next middleware
})
app.listen(4000);