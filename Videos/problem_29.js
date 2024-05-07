var express = require('express');
var app = express();
var url = require('url');


var greet = `<html><head></head>
    <body><h1>Hello There!! Welcome to my page</h1></body>
    </html>`;

app.get('/greet',function(req,res){

    res.send(greet);
    // res.send(`<h1>Hello There!! Welcom to my page</h1>`);
});

app.get('/message', function(req,res){
    res.send(`<h4>Hello There!!</h4><h1>Are You Human?</h1>`);
})

app.get('/intro', function(req,res){
    res.send(`
    <h3>My Name is</h3><h2>Rohan Katyal</h2>
    `);
})

app.get('/greet/:name', function(req,res){
    res.send(`
    <h4>Your Name is ${req.params.name}</h4>
    <h2>Hello There! ${req.params.name}</h2>
    `)
});

    
    
    app.get('/add', function(req,res){

        var inUrl = url.parse(req.url,true);
        var nums = inUrl.query;

        var num1 = Number(nums.num1);
        var num2 = Number(nums.num2);


        res.send(`${num1} + ${num2} = ${num1+num2}`);
        console.log(nums);
        console.log(Number(nums.num1) + Number(nums.num2));
    });

    app.get('/sub', function(req,res){
        var inUrl = url.parse(req.url,true);
        var nums = inUrl.query;
        var num1 = Number(nums.num1);
        var num2 = Number(nums.num2);
        res.send(`${num1} - ${num2} = ${num1-num2}`)
    })

app.listen(5500, ()=>{
    console.log('Server has started!!');
})

