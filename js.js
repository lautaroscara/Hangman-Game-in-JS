//Globales
var palabras=["HALLOWEEN", "ESQUELETO", "MONSTRUO", "VAMPIRO", "MOMIA", "DEMONIO",
	 "FANTASMA", "BRUJA", "GOBLIN", "ARAÑA", "SANGRE", "DIABLO", 
	 "ZOMBI", "MUERTE", "TELARAÑA", "CALABAZA", "CEMENTERIO", "CUERVO", 
	 "AULLIDO", "GRITO", "TRIPAS", "OSCURIDAD", "CONJURO", "SATANICO", "IT", 
	 "FRANKENSTEIN", "JIGSAW", "JACK", "CHUCKY", "JASON", "DRACULA", "EXORCISMO", "MUTILACION",
	"DESMEMBRAMIENTO"];
var x =palabras.length-1;
var palabra;
var largo;
var contI=0;
var acum="";
var cambio="";
var parrafo= document.getElementById("palabra");

//Funciones

function empezar(){
	var start= document.getElementById("primera");
	var ocul= document.getElementById("guardar");
	var juego= document.getElementById("cont_juego");
	var teclado= document.getElementById("teclado");
	palabra=palabras[Math.round(Math.random()*x)];
	largo=palabra.length;
	for (let i=0; i<largo; i++) {
		cambio= cambio+"_";
	}
	parrafo.innerHTML=cambio;
	teclado.style.display="block";
	ocul.style.display="block";
	juego.style.display="block";
	start.style.display="none";

}

function jugar(letra){
	var btn= document.getElementById(letra);
	var conte=parrafo.innerHTML;
	var img= document.getElementById("ahorcado");
	var resul= document.getElementById("img");
	var ocul= document.getElementById("guardar");
	var juego= document.getElementById("cont_juego");
	var teclado= document.getElementById("teclado");
	var fin= document.getElementById("fin");
	var era= document.getElementById("era");
	var como= document.getElementById("resultado");
	var poner;
	acum=acum+letra+"/";
	ocul.innerHTML=acum;
	btn.disabled=true;
	if (palabra.includes(letra)) {
		for(var i=0; i<largo; i++){
			if (letra==palabra.charAt(i))
			{
				conte=conte.replaceAt(i,letra);
			}
		}
		parrafo.innerHTML=conte;
		if (conte==palabra) {
			teclado.style.display="none";
			ocul.style.display="none";
			juego.style.display="none";
			fin.style.display="block";
			era.innerHTML="La palabra era "+palabra;
			como.innerHTML="Has ganado";
		}
	}
		else{
			contI=contI+1;
			img.src="img/"+contI+".png";
				if (contI==6) {
					teclado.style.display="none";
					ocul.style.display="none";
					juego.style.display="none";
					fin.style.display="block";
					era.innerHTML="La palabra era "+palabra;
					como.innerHTML="Has perdido";;
				}

		}

}

function reiniciar(){
	window.location="index.html";
}


//Animaciones

function sobre(a) {
	var btn= document.getElementById(a);
	var jugar=document.getElementById("jugar");
	btn.style.backgroundColor="#D4AF37";
	btn.style.color="#7573A6";
	btn.style.borderColor="#7573A6";

}

function fuera(a) {
	var btn= document.getElementById(a);
	var jugar=document.getElementById("jugar");
	btn.style.backgroundColor="#7573A6";
	btn.style.color="#D4AF37";
	btn.style.borderColor="#D4AF37";

}

function mirar() {
	var jugar=document.getElementById("jugar");
	var reset=document.getElementById("reiniciar");
	jugar.style.backgroundColor="#7573A6";
	jugar.style.color="#D4AF37";
	jugar.style.borderColor="#D4AF37";
	reset.style.backgroundColor="#7573A6";
	reset.style.color="#D4AF37";
	reset.style.borderColor="#D4AF37";
}

function nomirar() {
	var jugar=document.getElementById("jugar");
	var reset=document.getElementById("reiniciar");
	jugar.style.backgroundColor="#D4AF37";
	jugar.style.color="#7573A6";
	jugar.style.borderColor="#7573A6";
	reset.style.backgroundColor="#D4AF37";
	reset.style.color="#7573A6";
	reset.style.borderColor="#7573A6";

}








//Funciones auxiliares
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
