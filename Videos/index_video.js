// // creating HTTP server

// var http = require('http');
// http.createServer(function(request, response){
// }).listen(server local IP address);


// <---------------------->
// var http = require('http');

// var videoindexhtml = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Video</title>
//     <style>
//     body{
//         text-align:center;
//     }
//     </style>
// </head>
// <body>
//     <div id="parentdiv">
//         <h1>Blog Post title</h1>

//         <h3>Blog Post title</h3>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem ipsa beatae quisquam incidunt officia. Eveniet maiores veniam voluptate ducimus porro ut culpa, voluptates, dignissimos nulla eum perspiciatis exercitationem! Accusantium!
//         </p>

//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure beatae vel nobis tempora quisquam aspernatur voluptate voluptatem neque, consequatur eligendi necessitatibus alias blanditiis suscipit quia ullam! At, voluptas necessitatibus.
//         </p>
//     </div>
// </body>
// </html>
// `

// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.end(videoindexhtml);

// }).listen(1234);

// <------------------------>


// var http = require('http');
// var url = require('url');
// var filesrvr = require('fs');

// http.createServer(function(request, response){
//     filesrvr.readFile('index.html', function(err, data){
//         response.writeHead(200,  {'Content-Type' : 'text/html'});
//         response.write(data);
//         response.write(request.url);
//     })
    
// }).listen(5000);

// let addr = 'http://localhost:5000/default.html?name=scott';
// let result = url.parse(addr,true);
// console.log(result.host); // localhost:5000
// console.log(result.search); // ?name=scott
// console.log(result.pathname); // /default.html
// console.log(result.query); // [Object: null prototype] {name: 'scott'}
// console.log(result.query.name); // scott



// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// http.createServer(function(req, res){
//     var inUrl = url.parse(req.url, true);
//     var filename = '.'+inUrl.pathname;

//     fs.readFile(filename, function(err, data){

//         // if the filename user searching for is not found
//         // then the below error conditional statement 
//         // code will execute
//         // 400 -> error http status code
//         if(err){
//             res.writeHead(404, {'Content-Type':'text/html'});
//             return res.end('404 Not Found!!')
//         }
        
//         // if the filename has been found which user 
//         // searched for, then the below code will run on
//         // 200 -> confirm http status code
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();


//         // When we run localhost:5500 on the browser
//         // error occurs as no filename has been searched
//         // and if we put a filename, such as 'test.html',
//         // such that localhost:5500/test.html then error
//         // will still occurs, due to absence of the test.html
//         // file on the system, but localhost:5500/index.html
//         // will run with ease flow and no error.

//     })

// }).listen(5500);

// <-----------API Basics------------->
// <-----------Restful API------------->

// <----Express Basic fundamental Methods---->
// GET, POST, PUT and DELETE


var express = require('express');
// importing express module in express varibale

var app = express();
// setting up express based application in node.js

var fs = require('fs');
var url = require('url');

// <----GET---->

var getFunc = ()=>{
// app.get('/test', function(req,res){
//     res.send('Hello There!!');
// });
// Creating GET call using GET method (app.get)

// app.listen(5000, ()=>{
//     console.log('Server has Started!!');
// });
// Creating listen call with port = 5000
    
app.get('/index_video.html',function(req,res){
    var filepath = url.parse(req.url, true);
    var filename = '.'+filepath.path;
    fs.readFile(filename, function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end('\n\nDisplayed using GET method of Express');
    })
    
})

app.listen(5000, ()=>{
    console.log('Server has Started!!');
});
}

// getFunc();


// <----Postman and APIs---->
// Postman is an API that allows us to send requests to a server
// and get reponses back,
// it is not easy to send POST, DELETE etc. requests on a normal browser
// leading to the use of Postman.

// pass in following link to check the working of the server
// localhost:5000/index_video.html
// localhost:5000/test.html


// <--Sending Path Variables-->

var pathVar = ()=>{
    // app.get('/test/:data', function(req,res){
    //     res.send(req.params);
    //     // .params gives => :data
    // })
    // Example URL to enter on the browser
    // localhost:5000/test/Radhe => {data:'Radhe'}
    // localhost:5000/test/My Name_is%20Rohan => {data:'My Nameis Rohan'}

    app.get('/test/:data/:id/:count', function(req,res){
        res.send(req.params);
    })
    // Example URL to enter on the browser
    // localhost:5000/test/Radhe/2/10 => {data:'Radhe', id:'2', count:'10'}
    // localhost:5000/test/My Name_is%20Rohan/10/1 => {data:'My Nameis Rohan', id:'10', count:'1'}

    app.listen(5000, ()=>{
        console.log('Server has Started!!')
    })
}


// pathVar();

// <----POST---->

// POST request is used to post(upload) data
// we need something to store data?
// here we will be using persistence using data structure present inside Node.js
// called as node-persist
// body-parser => allows us to parse JSOn data properly

const storage = require('node-persist');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// initializing storage

var postFunc = ()=>{

    storage.init();
    app.post('/student', jsonParser, async(req,res)=>{
       const {student_id, student_name} = req.body;
    // This is storing the different elements of req.body to both the variables

    await storage.setItem(student_id, student_name);
    // Setting up the storage for storing item the data into te storage capacity
    // we have used await allowing to set the data item storing asynchronously,
    // await allows this part of code to run asynchronously along with the browser
    // html code and other execution process
    res.send('Added Student!!');
    console.log(req.body);
    // Sending response
    });
    // Example URL
    // localhost:5000/student => to be mandatorily used in Postman
    // as this URL can not be called in the normal browser

    // <--Retreiving the POST data-->
    // using GET method with POST method

    // app.get('/student/:id', async(req,res)=>{
    //     res.send(await storage.getItem(req.params.id));
    // });
    // Example URL
    // localhost:5000/student/1
    // localhost:5000/student/2
    // after running the POST request and entering in some student data

    // what for ? URL => localhost:5000/student/3
    // app.get('/student/:id', async(req, res)=>{
    //     if((await (storage.keys())).includes(req.params.id)){
    //         res.send(await storage.getItem(req.params.id));
    //     }else{
    //         res.send("Student not found!!");
    //     }
    // });

    // <---->

    app.listen(5000, ()=>{
        console.log('Server has Started!!');
    })

}

postFunc();

// <----PUT---->



// <--------->


// <-------->