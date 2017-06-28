const express	= require("express");
const multer	= require('multer');
const Ableton	= require('ableton');


const app		= express();
const storage =   multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './uploads');
	},
	filename: function (req, file, callback) {
		callback(null, Date.now() + "-"+ file.originalname);
	}
});
const upload = multer({ storage : storage}).single('file');


app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/yourgraphic', upload, function (req, res, next) {
	process_ableton( './' + req.file.path )
	.then(function(response){
		res.send(JSON.stringify(response));
	});
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});



function process_ableton(file) {
	return new Promise(function(resolve, reject){
		var ableton	= new Ableton( file );
		var data	= {};
		ableton.read(function(error, $) {
			if (error) {
				reject(error);
				return;
			}
			data.midikey	= $('midikey').map(function(i, el) {
				// this === el
				return $(this).attr('value');
			}).get().join(', ');
			
			resolve(data);
		});
	});
}