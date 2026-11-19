const http = require('http');
const port = 8000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req,res)=>{
res.end("Hello! I am your first Server1.");

});

myServer.listen(port,hostname,()=>
console.log('Server is running succesfully st http://${hostname}:{port}'));
