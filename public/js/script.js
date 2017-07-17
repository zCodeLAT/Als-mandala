//**
//* start - Dropzone
//*
var config	= {
	// previewsContainer: "#upload-form",
	// clickable: false,
	paramName: 'file',
	method: 'post',
	uploadMultiple: false,
	autoDiscover: false,
	autoProcessQueue: true,
	dictDefaultMessage: "Drop your .als proyect and see your mandala!",
	url: '/yourgraphic',
	// previewTemplate: window.document.querySelector("#file-dropzone").innerHTML,,
	init: function() {
		console.log('init');
		var that	= this;

		that.on('addedfile', function(file, response) {
			console.log('addedfile');
			that.processQueue();
		});
		that.on('error', (file) => {
			console.log('error');
		});
		that.on('processing', function(file) {
			console.log('processing');
		});
		that.on('success', function(file, response) {
			console.log('success');
			var r	= JSON.parse(response);
			//alert(r.tracktype);
			runSketch(r.tracktype, r.colortracks, r.volumes, r.pan, r.mastercolor, r.mastervolume);
			changeView();
			// $( "#defaultCanvas0").clone().appendTo( "#p5js" );
		});
		that.on('complete', function(file, response) {
			console.log('complete');
		});
	}
};
// var myDropzone = new Dropzone(document.body, config);
Dropzone.options.uploadForm = config;
//**
// ./Dropzone
//*

//**
//* Alterna entre mostrar la pantalla de Upload y la pantalla de contenido
//*
var upload_view	= true;
var changeView	= function(){
	if(upload_view === true) {
		upload_view	= false;
		$('#main-upload').hide();
		$('#main-content').show();
	} else {
		upload_view	= true;
		$('#main-upload').show();
		$('#main-content').hide();
	}
}
