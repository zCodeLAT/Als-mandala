var abletoncolors = {
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

// los siguientes son objetos de prueba de 3 als distintos.
// Las variables son:
//  miditracks = nombre, colormiditracks = color, midivolumes, midipan,
//  audiotrack: nombres, coloraudiotracks, audiovolumes, audiopan,
//  returnstracks: nombres, colorreturntracks, mastercolor, mastervolume,
var tamanio = 0.7;

var leitmotiv = {"miditracks":"hits, bombo, 5-Basic Sinelike, bass2, 9-Operator, 10-Operator, waves, waves 2, waves 3, 23-Instrument Rack, 24-MIDI, 27-Kit-Core Four AM, 28-Operator, 31-Operator, 32-Operator, 33-MIDI","colormiditracks":"140, 140, 160, 160, 149, 158, 159, 159, 159, 159, 158, 140, 149, 159, 159, 158","midivolumes":"0.3878041506, 0.3878041506, 0.2032284588, 0.5030471087, 0.1846038103, 0.009225713089, 1, 1, 1, 1, 0.2525869012, 0.7497060895, 0.1846038103, 0.3139864504, 0.03717992082, 1","midipan":"0.03937005997, 0.03937005997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03937005997, 0, 0, 0, 0","audiotracks":"drone, puntos 1.45, 1.43, 12-Audio, guitar A, guitar B, chord, chord 2, chord 3, drone, 1.45, 1.43, 30-Audio, Stinger master, explore stem 1, explore stem 2","coloraudiotracks":"185, 146, 180, 189, 158, 158, 159, 159, 159, 185, 146, 180, 189, 140, 162, 162","audiovolumes":"0.5779923201, 0.8061188459, 1, 0.2431768626, 0.06587524712, 0.04066827893, 0.6918309331, 0.6918309331, 0.6918309331, 0.0755982548, 0.5816325545, 1, 0.2431768626, 0.3801893592, 1, 1","audiopan":"0.03937005997, 0.03937005997, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03937005997, 0, 0, 0, 0","returnstracks":"A-Reverb, B-Delay, C-Ping Pong Delay","colorreturntracks":"161, 149, 160","mastercolor":"150","mastervolume":"1, 0.3500822783"};
// leitmotiv = Ogntkx_4_batalla_explore_stingers.als
var theme = {"miditracks":"NORD MIDI IN, NORD Lead, NORD MIDI IN, NORD Lead, 11-MIDI, 18-SEMPLER v1.0 by NOISS COKO, 19-pK-Multicore-drumrack, 20-Kit-Core 909, MTC","colormiditracks":"175, 152, 175, 152, 174, 189, 158, 147, 149","midivolumes":"0.722895503, 1, 0.722895503, 1, 1, 0.3027797043, 0.9319788218, 0.09097657353, 0.8357762098","midipan":"0, 0, 0, 0, 0, 0, 0.1023621559, 0, 0","audiotracks":"NORD FX, NORD REC, NORD FX, NORD REC, Guitarra, guit loop 1, guit loop 2, guit loop 3, guit loop 4, 21-Audio","coloraudiotracks":"161, 170, 161, 170, 185, 159, 180, 159, 180, 160","audiovolumes":"0.8061188459, 1.99526238, 0.2349526733, 1.99526238, 0.9319788218, 1.00185549, 0.9663330913, 1.1583792, 1.00185549, 1","audiopan":"0, 0, 0, 0, 0, 0, 0.1023621559, 0, 0","returnstracks":"A-Ping Pong Delay, B-Delay, C-Audio Effect Rack, Cadena","colorreturntracks":"161, 149, 160, 160","mastercolor":"186","mastervolume":"0.3500822783"};
// theme = theme_9_2016.als
var mics = {"miditracks":"1-MIDI, 2-MIDI","colormiditracks":"0, 0","midivolumes":"1, 1","midipan":"0, 0","audiotracks":"3-Audio, 4-Audio, 5-Audio, 6-Audio, 7-Audio, 8-Audio, 9-Audio, 10-Audio","coloraudiotracks":"165, 165, 165, 165, 176, 176, 176, 176","audiovolumes":"1, 1, 1, 1, 1, 1, 1, 1","audiopan":"0, 0","returnstracks":"A-Reverb, B-Delay","colorreturntracks":"0, 0","mastercolor":"0","mastervolume":"1"};
// mics = MICS_proto1.als


/*
function preload() {
    als = loadJSON(data);
}

*/
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
runSketch(abletoncolors, tamanio, leitmotiv, theme, mics);