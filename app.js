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
      res.sendFile(__dirname + "/index.html");
			//res.sendFile("graph.html");
});

app.post('/yourgraphic', upload, function (req, res, next) {
	process_ableton( './' + req.file.path )
	.then(function(response){
		//res.sendFile ... cargar grafico.html a una variable y agregarle el JSON.
		//res.sendFile(__dirname + "/public/graph.html");
			res.send(JSON.stringify(response));
//			console.log(JSON.parse(response));
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
//			console.log($(this).find("id").length);

			data.midiids = $('miditrack').map(function(i, el) {
				// this === el
				return $(this).attr("id");
			}).get().join(', ');


			data.audioids = $('audiotrack').map(function(i, el) {
				// this === el
				return $(this).attr("id");
			}).get().join(', ');

			data.miditracks = $('miditrack').map(function(i, el) {
				// this === el
				return $(this).find('effectivename').attr('value');
			}).get().join(', ');

			data.colormiditracks = $('miditrack').map(function(i, el) {
				// this === el
				return $(this).find('colorindex').attr('value');
			}).get().join(', ');

			data.midivolumes	= $('miditrack').map(function(i, el) {
				// this === el
				return $(this).find('volume').find('manual').attr('value');
			}).get().join(', ');

			data.midipan	=	$('miditrack').map(function(i, el) {
				// this === el
				return $(this).find('pan').find('manual').attr('value');
			}).get().join(', ');

			data.audiotracks	=	$('audiotrack').map(function(i, el) {
				return $(this).find('effectivename').attr('value');
			}).get().join(', ');

			data.coloraudiotracks = $('audiotrack').map(function(i, el) {
				// this === el
				return $(this).find('colorindex').attr('value');
			}).get().join(', ');

			data.audiovolumes	= $('audiotrack').map(function(i, el) {
				// this === el
				return $(this).find('volume').find('manual').attr('value');
			}).get().join(', ');

			data.audiopan	=	$('audiotrack').map(function(i, el) {
				// this === el
				return $(this).find('pan').find('manual').attr('value');
			}).get().join(', ');

			data.returnstracks = $('returntrack effectivename').map(function(i, el) {
				// this === el
				return $(this).attr('value');
			}).get().join(', ');

			data.colorreturntracks = $('returntrack colorindex').map(function(i, el) {
				// this === el
				return $(this).attr('value');
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
