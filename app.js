const express = require('express');
const path = require('path');
const app = express();
const info = require("./productos.json");

console.log(info)
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/index4',(req,res)=>{
    res.render('index4',{
        dataProductos:info
    });
});

app.get('/index3',(req,res)=>{
    res.render('index3');
});

app.get('/index2',(req,res)=>{
    res.render('index2');
});

app.get('/index',(req,res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});

