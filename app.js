const express = require('express');
const app = express();
app.use((req,res,next) =>{
    console.log("In middle Ware");
    next(); // You need to call next() to pass control to the next middleware
})
app.use((req,res,next) =>{
    console.log("In second middle ware");
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello From Express JS</h1>'); // When we are sending response, we are not looking for next middle ware function and sending response to end user.

})
app.listen(4000);