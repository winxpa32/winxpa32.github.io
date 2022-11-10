function generar() {

	var entrada = document.getElementById('inp').value;

	var punthum = 0;
	var puntbot = 0;

	var bot = Math.floor(Math.random()*3);

	var piedra = "PIEDRA";
	var papel = "PAPEL";
	var tijera = "TIJERA";

	// Piedra = 0
	// Papel = 1
	// Tijera = 2;

	// document.getElementById("con").innerHTML = piedra;

	if (bot == 0) {

		if (entrada == piedra) {
			document.getElementById("con").innerHTML = piedra;

		}else if (entrada == papel) {
			document.getElementById("con").innerHTML = piedra;
			var punthum = punthum + 1;
			document.getElementById("marcadorf").innerHTML = punthum;

		}else if (entrada == tijera) {
			document.getElementById("con").innerHTML = piedra;
			var puntbot = puntbot + 1;
			document.getElementById("marcadorc").innerHTML = puntbot;
		}	

	}


	if (bot == 1) {

		if (entrada == papel) {
			document.getElementById("con").innerHTML = papel;

		}else if (entrada == tijera) {
			document.getElementById("con").innerHTML = papel;
			var punthum = punthum + 1;
			document.getElementById("marcadorf").innerHTML = punthum;

		}else if (entrada == piedra) {
			document.getElementById("con").innerHTML = papel;
			var puntbot = puntbot + 1;
			document.getElementById("marcadorc").innerHTML = puntbot;
		}	

	}



	if (bot == 2) {

		if (entrada == tijera) {
			document.getElementById("con").innerHTML = tijera;

		}else if (entrada == piedra) {
			document.getElementById("con").innerHTML = tijera;
			var punthum = punthum + 1;
			document.getElementById("marcadorf").innerHTML = punthum;

		}else if (entrada == papel) {
			document.getElementById("con").innerHTML = tijera;
			var puntbot = puntbot + 1;
			document.getElementById("marcadorc").innerHTML = puntbot;
		}	

	}

	
	if (punthum > puntbot) {
		var ganh = "Los Rojos ganan!";
		document.getElementById("win").innerHTML = ganh;

	}else if(puntbot > punthum){
		var ganb = "Los Azules ganan!";
		document.getElementById("win").innerHTML = ganb;
		
	}else if (punthum == puntbot) {
		var empt = "Empate!";
		document.getElementById("win").innerHTML = empt;
	}
}