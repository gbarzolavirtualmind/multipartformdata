var express = require("express");
var app = express();
app.use(express.bodyParser({ keepExtensions: true, uploadDir: "uploads" }));                                                                        
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post("/upload", function (request, response) {                                               
    // request.files will contain the uploaded file(s),                                          
    // keyed by the input name (in this case, "file")                                            

	console.log(request);
	
    // show the uploaded file name                                                               
    console.log("file name", request.files.photo.name);                                           
    console.log("file path", request.files.photo.path);                                           

    response.end("upload complete");                                                             
});                        

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});