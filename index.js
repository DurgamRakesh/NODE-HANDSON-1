const http = require('http');
const server = http.createServer(function (req,res){
    if(req.url === '/'){
        res.write('welcome to first page of node')
        res.write('<h1>Hello This is Home Page</h1>')
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.write('Hello This is About Page')
        res.write("'Text in string format'")
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/contact'){
        res.write('Hello This is Contact Page')
        res.write(JSON.stringify([9876543210,9876543211]))
        res.end();
    }
});
server.listen(3001);
console.log('port running on 3001');