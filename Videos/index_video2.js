var http = require('http');
var fs = require('fs');
var url = require('url');


// Creating HTTP Server
var func1 = ()=>{
    var htmlCode = `<html><head><title</title></head>
    <body><h1>Hello World!!</h1><h5>Hello There!!</h5>
    </body></html>`

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        // res.end('Hello world this is the end!!');
        res.end(htmlCode);
    }).listen(5000);
}

// using File server to display an html file on the http server
var func2 = ()=>{
    http.createServer(function(req, res){
        fs.readFile('index_video.html', function(err, data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end('End of the file!!');
        })
    }).listen(5500);
}

// URL parsing on the HTTP server
var func3 = ()=>{

    http.createServer(function(req, res){
        var inURL = url.parse(req.url, true);
        var filename = '.' + inURL.pathname;
        var hostnaam = inURL.hostname;
        var querysearch = inURL.search;

        fs.readFile(filename, function(err, data){
            if(err){
                res.writeHead(404, {'Content-Type':'text/html'});
                res.write(`Error Occured for the filename : ${filename}`)
                return res.end('End of Response!!');
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(`Host : ${hostnaam}`);
                res.write(`Filename : ${filename}`);
                res.write(`Query : ${querysearch}`);
                res.write(data);
                return res.end('End of the file!!');
            }
        })

    }).listen(4321);
}

var func4 = ()=>{
    http.createServer(function(req,res){
        var newUrl = url.parse(req.url, true);
        var filename = '.'+newUrl.path;

        fs.readFile(filename, function(err,data){
            if(err){
                res.writeHead(404, {'Content-Type':'text/html'});
                res.write('404 Error occured!!');
                return res.end();
            }
            else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                return res.end();
            }
        })
    }).listen(5000);
}

var func5 = ()=>{
    http.createServer(function(req,res){
        var newurl = 'http://localhost:5000/index.html?name=rohan'
        var parseurl = url.parse(newurl, true);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(String(parseurl));
        // console.log(parseurl.host)
        // console.log(parseurl.search)
        // console.log(parseurl.pathname)
        // console.log(parseurl.query)
        // console.log(parseurl.query.name);
        res.end();
    }).listen(5000);
}

// API Basics

var express = require('express');
var app = express();

var apiFunc = ()=>{
    
    // app.get('/test',function(req,res){
    //     res.send('Hello There this is test !!');
    // })

    // app.get('/test1',function(req,res){
    //     res.send('Hello There this is test1 !!');
    // })

    // app.get('/index_video.html',function(req,res){
    //     var path = url.parse(req.url, true);
    //     var filename = '.'+path.path;

    //     fs.readFile(filename, (err,data)=>{
    //         if(err){
    //             res.write('Oops! That\'s an Error you got there!!');
    //         }else{
    //             res.writeHead(200, {'Content-Type':'text/html'});
    //             res.write(`request made for => \'${filename}\'`);
    //             res.write(data);
    //             return res.end();
    //         }
    //     })
    // })

    // app.get('/test/:id/:data', function(req,res){
    //     res.send(req.params);
    // })

    // POST operation
    // for executing POST operation we have to initialize
    // three things, storage, body-parser and jsonParser using body-parser
    var storage = require('node-persist');
    var bodyParser = require('body-parser'); // Middleware
    var jsonParser = bodyParser.json();

    // initialising storage unit
    storage.init();
    app.post('/student', jsonParser, async(req,res)=>{
        var {id,name,course,branch} = req.body;
        console.log(req.body);
        // req.body is the body of the request link
        // here body contains an object, with keywords as id, name, course and branch
        // therefore here we are trying to get those values, for them to be further
        // used, which also allows us to operate on them
        // the variable names defined are required to be same as the keys mentioned in
        // the object inside the request body.

        await storage.setItem(id, JSON.stringify({name,course,branch}));
        // problem solved of id and name

        // here we are setting the Item with the variables given containing the key-value pairs,

        res.send('Student Added in the storage!');
    });

    app.get('/studentvaluessee',async(req,res)=>{
        console.log(await storage.get('*'));
        // console.log(`Storage : ${}`);
        const student = [];
        for(const val of await storage.values()){
            student.push(val);
        }
        
        console.log(student);
        console.log(student.length);

        for(let i = 0;i<student.length;i++){
            console.log(student[i])
        }
    });

    app.get('/studentvaluesclear',async(req,res)=>{
        await storage.clear();
        res.send('Clear operation completed!!')
    });

    app.get('/studentshow/:id', async(req,res)=>{
        
        console.log(req.params);
        res.send(await storage.getItem(req.params.id));


        // if((await storage.keys()).includes(req.params.id)){
        //     res.send(await storage.getItem(req.params.id));
        //     console.log(await storage.getItem(req.params.id));
        // }else{
        //     res.send(`Student with id ${req.params.id} is not find!!`);}
    });
    
    // app.listen(portname, callbackfunction(generally arrow))

    app.listen(5000, ()=>{
        console.log('Server has Started!!');
    });
}

apiFunc();


var assignment = ()=>{
    // Importing Express.js
const express = require('express');
const app = express();

// Creating a storage to hold student data (in-memory storage for simplicity)
let students = [];

var bodyParser = require('body-parser'); // Middleware
var jsonParser = bodyParser.json();

// Creating a POST endpoint to accept student details
app.post('/student', jsonParser, (req, res) => {
    const {studentID, studentName, GPA} = req.body;
  // Validate the input data (e.g., check if studentID is unique)
  if (!studentID ||!studentName ||!GPA) {
    return res.status(400).send('Invalid input data');
    }
  // Add the student data to the storage
  students.push({ studentID, studentName, GPA });
  res.send(`Student added successfully!`);
});

// Creating an endpoint to retrieve all student data
app.get('/students', (req, res) => {
  res.json(students);
  res.json(students[0]);
  res.json(students[1]);
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
}

// assignment();