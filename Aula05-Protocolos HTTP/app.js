var http = require('http');

http.createServer(function(req,res){
    res.end("Hello World");
}).listen(8081);
//A cada alteração, para atualizar, deve-se reiniciar o server.
console.log("O servidor está rodando");