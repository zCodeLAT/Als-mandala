function runSketch(tracktype, colortracks, volumes, pan, mastercolor, mastervolume) {

	var abletoncolors = {
	    0:"#666161",
	    140:"#F0654C",
	    141:"#C3690B",
	    142:"#B89308",
	    143:"#98AA2C",
	    144:"#6CB44C",
	    145:"rgb(15, 170, 155)",
	    146:"rgb(11, 130, 195)",
	    147:"#1E1EFF",
	    148:"#4A6BB6",
	    149:"#8D7CC4",
	    150:"#AEAEAE",
	    151:"#4B4B4B",

	    152:"#FF2020",
	    153:"#D8D5A5",
	    154:"#ACC40B",
	    155:"#98D361",
	    156:"#47C80C",
	    157:"rgb(11,196,181)",
	    158:"#32B1F0",
	    159:"#87A6EC",
	    160:"#B3A2EE",
	    161:"#BD7CC4",
	    162:"#C96A8C",
	    163:"#AD704E",

	    164:"#F77B1E",
	    165:"#C5FB1A",
	    166:"#A2FF89",
	    167:"#38FF4A",
	    168:"#45FFB5",
	    169:"#6FFFDB",
	    170:"#37ECFF",
	    171:"#A9D4FF",
	    172:"#AFBFFF",
	    173:"#CBABFF",
	    174:"#E6A2EE",
	    175:"#FF5ADB",

	    176:"#FFB249",
	    177:"#FFF255",
	    178:"#E6F51D",
	    179:"#DEC712",
	    180:"#D6C29D",
	    181:"#C1D8BB",
	    182:"#C6E2DE",
	    183:"#D8E1E8",
	    184:"#C3D3E1",
	    185:"#E1C2BA",
	    186:"#F46B9C",

	    187:"#FFB1BE",
	    188:"#FFB995",
	    189:"#FFF3BA",
	    190:"#E9F2CD",
	    191:"#D8E4B0",
	    192:"#E3E3E3",
	    194:"#E6F8FC",
	    195:"#E7EAF5",
	    196:"#EEE8F6",
	    197:"#F9F9F9",
	    198:"#FBFCFC",
	    199:"#FFFFFF",
	}
	var escala = 0.8;
	var ntracks = tracktype.split(", ").length;
	that = this;

	that.setup = function() {
	  createCanvas(800*escala, 800*escala);
	}

	that.draw = function() {
	  background("#201027");   // Setea
	  translate(width/2, height/2);
	  drawCenter(mastercolor.toString(), mapLevels(mastervolume.split(", ")[0]));
	/*  for (j=0; j<15; j++) {
	    drawCircle(20*j, 10*j, json.colortracks.split(", ")[j]);
	  }*/
	  for (i=0; i<ntracks; i++) {
	    if (tracktype.split(", ")[i] == 'audiotrack') {
	      for (j=0; j<12;j++) {
	      drawCircle(getSeparacion(ntracks)*(i+1), mapLevels(volumes.split(", ")[i])/2, colortracks.split(", ")[i]);
	      rotate(TWO_PI/12);
	      }
	    }
	    else if (tracktype.split(", ")[i] == 'miditrack'){
	      for (n=0; n<16; n++) {
	      drawTriangle(getSeparacion(ntracks)*(i+1), colortracks.split(", ")[i], mapLevels(volumes.split(", ")[i])/4);
	      rotate(TWO_PI/16);
	      }
	    }
	    else {
	      for (z=0; z<24; z++) {
	      drawQuad(getSeparacion(ntracks)*(i+1), colortracks.split(", ")[i], mapLevels(volumes.split(", ")[i])/4);
	      rotate(TWO_PI/24);
	      }
	    }
	      //drawCircle(getSeparacion(ntracks)*(i+1), mapLevels(json.volumes.split(", ")[i])/4, json.colortracks.split(", ")[i]);
	    }
	  noLoop();
	}


	that.mapLevels = function(value) {
	  //var val = log(value);
	  var yval = log(value);
	  var val = map(yval, -8.059047853676677, 0.6907755604909805, 5, 70);
	  //  var y = map(yval, -1.99526238, 1.99526238, 0, 255);
	  return val;
	}
	that.drawCenter = function(color, size) {
	  fill(abletoncolors[color]);
	  return ellipse(0, 0, size*escala); //el tamaño puede variar con el volumen del master.
	}

	that.drawTriangle = function(position, color, size) {
	  fill(abletoncolors[color]);
	  props = [0+position, 0, 20+position+size, -40-size, 20+position+size, 0];
	  return triangle(props[0], props[1], props[2], props[3], props[4], props[5]);
	}

	that.drawCircle = function(position, size, color) {
	  fill(abletoncolors[color]);
	  return ellipse(position, 0, size*escala);
	}

	that.drawQuad = function(position, color, size) {
	  fill(abletoncolors[color]);
	  return rect(position, 0, size, size);
	}

	that.getSeparacion = function(tracknumber) {
	  return (width-mapLevels(mastervolume.split(", ")[0]))/2/tracknumber;
	}
	new p5;
}
