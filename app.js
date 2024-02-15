let htp = require('http');//We require http module to create a server in nodejs
htp.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
      res.write('<html>');
      res.write('<head><title>Enter a message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="mess"><button type="submit">Send</button></form></body>');
    res.write('</html');
    return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome</h1></body>');
    res.write('</html');
  //  res.write("Welcome Back folks!!:)");
  //  res.end(); process.exit(); // or you can write res.end("Welcome back folks")
}).listen(3000); //http://localhost:3000/



/*
HTTP:This module allows transfer of data between node.js and computer throught hyper text transfer protocol.

   FS: File system allows node.js to interact with file systems on the computer its running.

	PATH : It allows to manipulate with the files.

	EVENTS : It helps in creating custome events and event listeners in node.js


*/