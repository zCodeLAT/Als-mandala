var Ableton = require('ableton');
var ableton = new Ableton('./8BIT_composicion.als');
var myDropzone = new Dropzone("div#myId", { url: "/file/post"});



const express = require('express')
const app = express()

var trackNames = [];

app.get('/', function (req, res) {
          ableton.read(function(error, $) {
                        if (error) {
                          console.error(error);
                        }
                        else {
                          // `$` is the Cheerio root object.
                          //res.send( $.root().html() );
                          res.send(
                            $('midikey').map(function(i, el) {
                              // this === el
                              return $(this).attr('value');
                            }).get().join(', ')
                          );
                        }
          });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})