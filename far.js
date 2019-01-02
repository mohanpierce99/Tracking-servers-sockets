let net=require('net');

net.createServer((socket)=>{
socket.pipe(socket);
socket.on('data',function(data){
socket.write(data+" echoed from server");
});
}).listen(3000);

