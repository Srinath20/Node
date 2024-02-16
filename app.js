const htp = require('http');//We require http module to create a server in nodejs
const fs = require('fs');
htp.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
      res.write('<html>');
      res.write('<head><title>Enter a message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body>');
    res.write('</html');
    return res.end();
    }
    if(url ==='/message' && method ==='POST'){
      const body = [];
      req.on('data', (chunks) => {
        body.push(chunks);
      });
      req.on('end',() =>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        //fs.writeFileSync() methods blocks the code bwlo it from getting executed which might be a problem in reading/copying big files. So we prefer to use fs.writeFile();
        fs.writeFile('names.txt',message,(err) =>{
          res.statusCode = '302';
        res.setHeader('Location','/');
      return res.end(); 
        }); 
      })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome</h1></body>');
    res.write('</html');
  }).listen(3000);