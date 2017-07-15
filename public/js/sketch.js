function runSketch(abletoncolors, tamanio, leitmotiv, theme, mics) {
	var that	= this;
	that.setup	= function() {
	  createCanvas(800*tamanio, 800*tamanio);
	}

	that.draw	= function() {
	  background("#441D4D");   // Setea
	  translate(width/2, height/2);
	  drawCenter(leitmotiv["mastercolor"].toString()); //
	  drawEllipse();
	  //drawShape();
	  noLoop();
	}

	that.mapLevels	= function(in_min, in_max, out_min, out_max) {
	  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

	that.rangoLive	= function(numero) {
	    var minLive = 0.0003162277571;
	    var maxLive = 1.99526238;
	    return numero;
	}

	that.drawCenter	= function(color) {
	  fill(abletoncolors[color]);
	//  alert(leitmotiv.mastervolume.split(", ")[0]);
	  ellipse(0, 0, 100*tamanio, 100*tamanio);
	  //alert(abletoncolors[color]);
	}

	that.drawShape	= function(shape, escala, color) {  //parametros pueden variar; por ejemplo: cantidad de midi clips, color de track, volume y pan.
	    fill(abletoncolors[140]);
	    scale(2.0);
	    triangle(130, 75, 58, 20, 86, 75);
	}

	that.drawEllipse	= function() {
	  fill(abletoncolors[140]);
	  ellipse();
	}
	new p5();
}
// runSketch(abletoncolors, tamanio, leitmotiv, theme, mics);