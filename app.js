// var Configstore	= require('configstore');
var express =   require("express");
var multer  =   require('multer');

var app         =   express();
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + "-"+ file.originalname);
//   }
// });

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });


// var upload = multer({ storage : storage}).any();
// var upload = multer({ dest: 'uploads/' })
// var upload = multer({ dest: 'uploads/' })

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/yourgraphic', upload.single('file'), function (req, res, next) {
	
    // upload(request, response, function(req, res, next) {
    	console.log(req.file.buffer);
    	// res.send(req.file);
        // if(err) {
        //     return res.end("Error uploading file.");
        // }
    // });
        // res.end("File is uploaded");
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
