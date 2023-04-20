/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello Word--!--');


});

server.listen(port,hostname,() => {

    console.log(`Servidor rodando em http://${hostname}:${port}/`)
})  

*/

const express = require('express');
const app=express();
const path=require('path');
const router=express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})

app.use('/',router);
app.use('/about',router);
app.listen(process.env.port||3000);
console.log("Servidor rodando");
