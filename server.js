var express = require("express"),                                                                
    app = express();                                                                             

// tell express to use the bodyParser middleware                                                 
// and set upload directory                                                                      
app.use(express.bodyParser({ keepExtensions: true, uploadDir: "uploads" }));                                                                        
app.post("/upload", function (request, response) {                                               
    // request.files will contain the uploaded file(s),                                          
    // keyed by the input name (in this case, "file")                                            

	console.log(request);
	
    // show the uploaded file name                                                               
    console.log("file name", request.files.photo.name);                                           
    console.log("file path", request.files.photo.path);                                           

    response.end("upload complete");                                                             
});                                                                                              

app.listen(3000)