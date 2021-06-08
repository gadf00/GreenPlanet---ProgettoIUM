var totaleAereo = 0;
var totaleTreno = 0;
var totaleAuto = 0;
var totaleMoto = 0;
var totaleTaxi = 0;
var totaleAcqua = 0;
var totaleTv = 0;

var valoreAereo = 0;
var valoreTreno = 0;
var valoreAuto = 0;
var valoreMoto = 0;
var valoreTaxi = 0;
var valoreAcqua = 0;
var valoreTv = 0;

var aereo = 100;
var treno = 101;
var moto = 102;
var taxi = 103;
var acqua = 104;
var tv = 105;
var auto = 106;



var risultato = 0;
var sliderAereo = document.getElementById("myRange-aereo");
var outputAereo = document.getElementById("testo-aereo");
var sliderTreno = document.getElementById("myRange-treno");
var outputTreno = document.getElementById("testo-treno");
outputAereo.innerHTML = sliderAereo.value + " km"; // Display the default slider value
outputTreno.innerHTML = sliderTreno.value + " km"; // Display the default slider value
var sliderAuto = document.getElementById("myRange-auto");
var outputAuto = document.getElementById("testo-auto");
var sliderMoto = document.getElementById("myRange-moto");
var outputMoto = document.getElementById("testo-moto");
outputAuto.innerHTML = sliderAuto.value + " km"; // Display the default slider value
outputMoto.innerHTML = sliderMoto.value + " km"; // Display the default slider value
var sliderTaxi = document.getElementById("myRange-taxi");
var outputTaxi = document.getElementById("testo-taxi");
var sliderAcqua = document.getElementById("myRange-acqua");
var outputAcqua = document.getElementById("testo-acqua");
outputTaxi.innerHTML = sliderTaxi.value + " km"; // Display the default slider value
outputAcqua.innerHTML = sliderAcqua.value + " lt"; // Display the default slider value
var sliderTv = document.getElementById("myRange-tv");
var outputTv = document.getElementById("testo-tv");
outputTv.innerHTML = sliderTv.value + " minuti"; // Display the default slider value

var i = 0;

// Update the current slider value (each time you drag the slider handle)
sliderAereo.oninput = function() {
    valoreAereo = parseInt(this.value);
    outputAereo.innerHTML = this.value + " km";
}
sliderTreno.oninput = function() {
    valoreTreno = parseInt( this.value);
    outputTreno.innerHTML = this.value + " km";
}
sliderAuto.oninput = function() {
    valoreAuto = parseInt(this.value);
    outputAuto.innerHTML = this.value + " km";
}
sliderMoto.oninput = function() {
    valoreMoto = parseInt( this.value);
    outputMoto.innerHTML = this.value + " km";
}
sliderTaxi.oninput = function() {
    valoreTaxi = parseInt(this.value);
    outputTaxi.innerHTML = this.value + " km";
}
sliderAcqua.oninput = function() {
    valoreAcqua = parseInt( this.value);
    outputAcqua.innerHTML = this.value + " lt";
}
sliderTv.oninput = function() {
    valoreTv = parseInt(this.value);
    outputTv.innerHTML = this.value + " minuti";
}



//quando viene cliccato il tasto calcola co2 viene chiamata la funzione che aggiunge al div l'icona con il valore di co2 emessa



function CalcolaCO2Aereo() {
    
    totaleAereo = valoreAereo;
    document.getElementById("icona1").innerHTML ='<br>'+'<i id="'+aereo+'1" class="fa fa-plane" style="font-size: 40px;margin-right: 30px;color: rgb(35,105,174)">';
    document.getElementById("risultato1").innerHTML = '<br>'+'<p5 id="'+aereo+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreAereo+ "kg</p5>";
    document.getElementById("rimuovi1").innerHTML ='<br>'+'<i onClick=RimuoviAereo('+valoreAereo+'); id="'+aereo+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal1').modal('hide');  
}

function CalcolaCO2Treno() {
    totaleTreno =  valoreTreno;
    document.getElementById("icona2").innerHTML ='<br>'+'<i id="'+treno+'1" class="fa fa-train" style="font-size: 40px;margin-right: 30px;color: rgb(201,25,25)">';
    document.getElementById("risultato2").innerHTML = '<br>'+'<p5 id="'+treno+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreTreno+ "kg</p5>";
    document.getElementById("rimuovi2").innerHTML ='<br>'+'<i onClick=RimuoviTreno('+valoreTreno+'); id="'+treno+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal2').modal('hide');
    
}

function CalcolaCO2Auto() {
    totaleAuto = totaleAuto + valoreAuto;
    document.getElementById("icona3").innerHTML +='<br>'+'<i id="'+auto+'1" class="fa fa-car" style="font-size: 40px;margin-right: 30px;color: rgb(40,37,37)">';
    document.getElementById("risultato3").innerHTML += '<br>'+'<p5 id="'+auto+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreAuto+ "kg</p5>";
    document.getElementById("rimuovi3").innerHTML +='<br>'+'<i onClick=RimuoviAuto('+valoreAuto+'); id="'+auto+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal3').modal('hide');
    
}

function CalcolaCO2Moto() {
    totaleMoto =  valoreMoto;
    document.getElementById("icona4").innerHTML +='<br>'+'<i id="'+moto+'1" class="fa fa-motorcycle" style="font-size: 40px;margin-right: 30px;color: rgb(43,146,90)">';
    document.getElementById("risultato4").innerHTML += '<br>'+'<p5 id="'+moto+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreMoto+ "kg</p5>";
    document.getElementById("rimuovi4").innerHTML +='<br>'+'<i onClick=RimuoviMoto('+valoreMoto+'); id="'+moto+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal4').modal('hide');
    
}

function CalcolaCO2Taxi() {
    totaleTaxi =  valoreTaxi;
    document.getElementById("icona5").innerHTML +='<br>'+'<i id="'+taxi+'1" class="fa fa-taxi" style="font-size: 40px;margin-right: 30px;color: rgb(225,230,4)">';
    document.getElementById("risultato5").innerHTML += '<br>'+'<p5 id="'+taxi+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreTaxi+ "kg</p5>";
    document.getElementById("rimuovi5").innerHTML +='<br>'+'<i onClick=RimuoviTaxi('+valoreTaxi+'); id="'+taxi+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal5').modal('hide');
    
}

function CalcolaCO2Acqua() {
    totaleAcqua =  valoreAcqua;
    document.getElementById("icona6").innerHTML +='<br>'+'<i id="'+acqua+'1" class="fa fa-tint" style="font-size: 40px;margin-right: 30px;color: rgb(80,168,255)">';
    document.getElementById("risultato6").innerHTML +='<br>'+ '<p5 id="'+acqua+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreAcqua+ "kg</p5>";
    document.getElementById("rimuovi6").innerHTML +='<br>'+'<i onClick=RimuoviAcqua('+valoreAcqua+'); id="'+acqua+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal6').modal('hide');
    
}

function CalcolaCO2Tv() {
    totaleTv =  valoreTv;

    document.getElementById("icona7").innerHTML +='<br>'+'<i id="'+tv+'1" class="fa fa-tv" style="font-size: 40px;margin-right: 30px;color: rgb(0,0,0)">';
    document.getElementById("risultato7").innerHTML += '<br>'+'<p5 id="'+tv+'2" style="color:black;font-size:26px;"> '+'CO2 emessa: ' + valoreTv+ "kg</p5>";
    document.getElementById("rimuovi7").innerHTML +='<br>'+'<i onClick=RimuoviTv('+valoreTv+'); id="'+tv+'3" class="fa fa-remove" style="font-size: 40px;margin-right: 30px;color: red">';
    CalcolaCO2Totale();
    $('#modal7').modal('hide');
    
}

function CalcolaCO2Totale() {
    risultato = totaleAereo + totaleTreno + totaleAuto + totaleMoto + totaleTaxi + totaleAcqua + totaleTv;
    document.getElementById("totale").innerHTML = "Totale: " + risultato+"kg";
}

function RimuoviAereo(valore){
        totaleAereo=totaleAereo-valore;
        
            $('#'+aereo+'1').remove();
            $('#'+aereo+'2').remove();
            $('#'+aereo+'3').remove();
        
        CalcolaCO2Totale();
}

function RimuoviTreno(valore){
        totaleTreno=totaleTreno-valore;
        
        $('#'+treno+'1').remove();
        $('#'+treno+'2').remove();
        $('#'+treno+'3').remove();
        
        CalcolaCO2Totale();
}

function RimuoviAuto(valore){
        totaleAuto=totaleAuto-valore;
        
        $('#'+auto+'1').remove();
        $('#'+auto+'2').remove();
        $('#'+auto+'3').remove();
       
        CalcolaCO2Totale();
}

function RimuoviMoto(valore){
        totaleMoto=totaleMoto-valore;
        
        $('#'+moto+'1').remove();
        $('#'+moto+'2').remove();
        $('#'+moto+'3').remove();
      
        CalcolaCO2Totale();
}

function RimuoviTaxi(valore){
        totaleTaxi=totaleTaxi-valore;
       
        $('#'+taxi+'1').remove();
        $('#'+taxi+'2').remove();
        $('#'+taxi+'3').remove();
        
        CalcolaCO2Totale();
}

function RimuoviAcqua(valore){
        totaleAcqua=totaleAcqua-valore;
       
        $('#'+acqua+'1').remove();
        $('#'+acqua+'2').remove();
        $('#'+acqua+'3').remove();
        
        CalcolaCO2Totale();
}

function RimuoviTv(valore){
        totaleTv=totaleTv-valore;
       
        $('#'+tv+'1').remove();
        $('#'+tv+'2').remove();
        $('#'+tv+'3').remove();
        
        CalcolaCO2Totale();
}

