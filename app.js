let htp = require('http');//We require http module to create a server in nodejs
let req = "Srinath";
htp.createServer((req,res) => {
    console.log(req);
    res.write("Welcome Back folks!!:)");
    res.end(); // or you can write res.end("Welcome back folks")
}).listen(4000); //http://localhost:4000/



/*
HTTP:This module allows transfer of data between node.js and computer throught hyper text transfer protocol.

   FS: File system allows node.js to interact with file systems on the computer its running.

	PATH : It allows to manipulate with the files.

	EVENTS : It helps in creating custome events and event listeners in node.js


*/