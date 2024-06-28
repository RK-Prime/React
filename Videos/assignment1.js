var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var students = [];

app.post('/student',jsonParser, function(req,res){
    var {studentID, studentName, studentGPA} = req.body;
    students.push({studentID, studentName, studentGPA});
    res.end('Student added succesfully!!');
});


app.get('/student/:id', function(req,res){

    for(let i=0; i<students.length; i++){
        if(students[i]['studentID'] == req.params.id){
            var assignment1_a = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Coding Problems 2</title>
                </head>
                <body>
                <h1>Student Detail</h1>
                <h4>Student id: ${students[i]['studentID']}</h4>
                <h4>Name: ${students[i]['studentName']}</h4>
                <h4>GPA:${students[i]['studentGPA']}</h4>
                </body>
                </html>`;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(assignment1_a);
        };
    };
    
});


app.get('/topper', (req,res)=>{
    var a;
    var topgpa = students[0]['studentGPA'];
    var stdlen = students.length
    for(let i=0;i<stdlen;i++){
        if(students[i]['studentGPA']>topgpa){
            topgpa = students[i]['studentGPA'];
            a = i;
        };
    };

    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Problems 2</title>
</head>
<body>
    <h1>Student Detail</h1>
    <h4>Student id:${students[a]['studentID']}</h4>
    <h4>Name:${students[a]['studentName']}</h4>
    <h4>GPA:${topgpa}</h4>
</body>
</html>
    `);
});


app.get('/allStudents',(req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    for(let i=0;i<students.length;i++){
            res.write(`<h1>Student Detail</h1>
        <h4>Student id:${students[i]['studentID']}</h4>
        <h4>Name:${students[i]['studentName']}</h4>
        <h4>GPA:${students[i]['studentGPA']}</h4>`);
        };
        res.end('Student Data End!!');
    });


var port = 5000;

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});

