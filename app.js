const htp = require('http');//We require http module to create a server in nodejs
const route = require('./routes');
htp.createServer((route)).listen(3000);