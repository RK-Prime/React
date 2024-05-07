// creating HTTP server

var http = require('http');

var videoindexhtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video</title>
    <style>
    body{
        text-align:center;
    }
    </style>
</head>
<body>
    <div id="parentdiv">
        <h1>Blog Post title</h1>

        <h3>Blog Post title</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem ipsa beatae quisquam incidunt officia. Eveniet maiores veniam voluptate ducimus porro ut culpa, voluptates, dignissimos nulla eum perspiciatis exercitationem! Accusantium!
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure beatae vel nobis tempora quisquam aspernatur voluptate voluptatem neque, consequatur eligendi necessitatibus alias blanditiis suscipit quia ullam! At, voluptas necessitatibus.
        </p>
    </div>
</body>
</html>
`

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(videoindexhtml);

}).listen(5000);
