$("#piu").click(function(){
	var numero= document.getElementById("numero").innerHTML;
	var num = parseInt(numero);
	num++;
	document.getElementById("numero").innerHTML=num;
	var stringprezzoalbero=document.getElementById("prezzoalbero").innerHTML;
	stringprezzoalbero=stringprezzoalbero.substring(2, stringprezzoalbero.lenght);
	var prezzoalbero = parseInt(stringprezzoalbero);
	var totale=num*prezzoalbero;
	document.getElementById("totale").innerHTML="&#8364 "+totale;
});

$("#meno").click(function(){
	var numero= document.getElementById("numero").innerHTML;
	var num = parseInt(numero);
	num--;
	if(num<1){
	document.getElementById("numero").innerHTML=1;
	num=1;
	}else{
	document.getElementById("numero").innerHTML=num;
	var stringprezzoalbero=document.getElementById("prezzoalbero").innerHTML;
	stringprezzoalbero=stringprezzoalbero.substring(2, stringprezzoalbero.lenght);
	var prezzoalbero = parseInt(stringprezzoalbero);
	var totale=num*prezzoalbero;
	document.getElementById("totale").innerHTML="&#8364 "+totale;
	}
});