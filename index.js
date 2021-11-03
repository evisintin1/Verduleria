const http = require('http')
const express = require('express');
const { Console } = require('console');
const app = express();

const hostname = '127.0.0.1'
const port = 2500

app.listen(port,()=>{
    console.log("Servidor corriendo")
})

app.get('/puerto', function(req, res)  {
    res.send('Servidor corriendo en el puerto:' + port)
  });
app.post('/verdura',function(req,res){
    console.log(req.post("verduras"))
})