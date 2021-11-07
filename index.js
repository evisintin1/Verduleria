const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 2500;
let verdura;
app.use(express.json);

app.listen(port,()=>{
    console.log("Servidor corriendo");
})

app.get('/puerto', (req, res) => {
    res.send('Servidor corriendo en el puerto:' + port)
  });


app.post('/verdura',(req,res)=>{
    verdura=req.body;
    for (let i in verdura) {
        if(verdura[i].tipo=='Verdura'){
            
            suma += verdura[i].precio;
        }
        
    }
    res.send('El valor total es' + suma);

})