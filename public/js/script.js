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
	url: '/yourgraphic',
	// previewTemplate: window.document.querySelector("#file-dropzone").innerHTML,,
	init: function() {
		console.log('init');
		var that	= this;

		that.on('drop', function(file, response) {
			console.log('drop');
			console.log(response);
			that.processQueue();
		});
		that.on('addedfile', function(file, response) {
			console.log('addedfile');
			console.log(response);
			that.processQueue();
		});
		that.on('error', (file) => {
			console.log('error');
		});
		that.on('processing', function(file, response) {
			console.log('processing');
			console.log(response);
			that.processQueue();
		});
		that.on('success', function(file, response) {
			console.log('success');
			console.log(response);
			changeView();
		});
		that.on('complete', function(file, response) {
			console.log('complete');
			console.log(response);
			changeView();
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


var obj = $("#uploadForm");

$(document).on('dragenter', function (e)
{
    e.stopPropagation();
    e.preventDefault();
    //alert( e.isDefaultPrevented() ); 
});
$(document).on('dragover', function (e)
{
  e.stopPropagation();
  e.preventDefault();
  obj.css('border', '2px dotted #0B85A1');
});
$(document).on('drop', function (e)
{
    e.stopPropagation();
    e.preventDefault();
});
