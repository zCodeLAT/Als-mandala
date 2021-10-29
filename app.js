//pete

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

app.use(express.static('public'));

//app.use('/public', function (req, res, next) {
//  next();
//});
//app.use(express.static('node_modules/dropzone/dist'));


app.get('/',function(req,res){
      res.sendFile(__dirname + "index.html");
			//res.sendFile("graph.html");
});

app.post('/yourgraphic', upload, function (req, res, next) {

	process_ableton( './' + req.file.path )
	.then(function(response){
		// res.send(JSON.stringify(response));
		res.send(JSON.stringify(response));
	});
});

app.listen(3001,function(){
    console.log("Working on port 3001");
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
//			console.log($(this).find("id").length);

			data.tracktype = $('miditrack, audiotrack, returntrack').map(function(i, el) {
				// this === el
				return $(this).get(0).tagName;
			}).get().join(', ');

			data.colortracks = $('miditrack, audiotrack, returntrack').map(function(i, el) {
				// this === el
				return $(this).find('colorindex').attr('value');
			}).get().join(', ');

			data.volumes	= $('miditrack, audiotrack, returntrack').map(function(i, el) {
				// this === el
				return $(this).find('volume').find('manual').attr('value');
			}).get().join(', ');

			data.pan	=	$('miditrack, audiotrack, returntrack').map(function(i, el) {
				// this === el
				return $(this).find('pan').find('manual').attr('value');
			}).get().join(', ');

			data.mastercolor = $('mastertrack').map(function(i, el) {
				// this === el
				return $(this).find('colorindex').attr('value');
			}).get().join(', ');

			data.mastervolume	= $('mastertrack volume').map(function(i, el) {
				// this === el
				return $(this).find('manual').attr('value');
			}).get().join(', ');

			resolve(data);
		});
	});
}
module.exports = app;
