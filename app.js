// var Configstore	= require('configstore');
var express =   require("express");
var multer  =   require('multer');
var Ableton = require('ableton');
var cheerio = require('cheerio');
var ableton = new Ableton('./8BIT_composicion.als');

var app         =   express();
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, Date.now() + "-"+ file.originalname);
//   }
// });

//var storage = multer.memoryStorage();
//var upload = multer({ storage: storage });
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-"+ file.originalname);
  }
});

var upload = multer({ storage : storage}).any();

// var upload = multer({ storage : storage}).any();
// var upload = multer({ dest: 'uploads/' })
// var upload = multer({ dest: 'uploads/' })

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/yourgraphic', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return res.end("Error uploading file.");
    }
    //res.end("File is uploaded");
    console.log(getAlsData());
    res.send("taka taka");
    // Everything went fine
  })
})

function getAlsData() {
  ableton.read(function(error, $) {
  if (error) {
    console.error(error);
  }
  else {
    // `$` is the Cheerio root object.

      $('miditrack').map(function(i, el) {
          // this === el
          return $(this).attr('id');
        }).get().join(', ')

  }
});
}
/*
app.post('/yourgraphic', function (req, res, next) {
  upload(req,res,function(err) {
      if(err) {
          return res.end("Error uploading file.");
      }
    // upload(request, response, function(req, res, next) {
    	// console.log(req.file.buffer);
    	// res.send(req.file);
        // if(err) {
        //     return res.end("Error uploading file.");
        // }
    // });
      ableton.read(function(error, $) {
            if (error) {
              console.error(error);
            }
            else {
              //var $ = cheerio.load('/8BIT_')
              // `$` is the Cheerio root object.
              //res.send( $.root().html() );
              console.log(

                $('midikey').map(function(i, el) {
                    // this === el
                    return $(this).attr('value');
                  }).get().join(', ')

              );
              res.send('taca taca');
            }
        })
  })

        res.end("File is uploaded");
});
*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});
