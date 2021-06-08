var bnome = false;
var bvia = false;
var bcitta = false;
var bprovincia = false;
var bcap = false;
var btelefono = false;
var bnumcarta = false;
var bnomecarta = false;
var bscadenza = false;
var bcvv = false;

function avviso(id,mex){
    $("#"+id).html(mex);
    $("#"+id).fadeIn("slow");
    $("#"+id).delay(1000).fadeOut("slow");
}

function controlla(){
    verificaNome();
    verificaVia();
    verificaCitta();
    verificaProvincia();
    verificaCap();
    verificaTelefono();
    verificaNumcarta();
    verificaNomecarta();
    verificaScadenza();
    verificaCvv();
    
   

    if(bnome && bvia && bcitta && bprovincia && bcap && btelefono && bnumcarta && bnomecarta && bscadenza && bcvv){
        location.href("Congratulazioni.html");
        return true;
    }else{
        return false;
    }
}

function verificaNome(){
	var nome = $("#nome").val();


    if(nome.length == 0){
        avviso("erroreRegnome","Il campo e' obbligatorio");
        bnome= false;
        return;
    }
    var nomeV=/[A-Za-z]{1,19}/;
    if(String(nome).match(nomeV))
    {
        bnome= true;
    }
    else
    {
        avviso("erroreRegvia","Il nome non rispetta i canoni");
        bnome= false;
    }
}

    function verificaVia(){
	var via = $("#via").val();


    if(via.length == 0){
        avviso("erroreRegvia","Il campo e' obbligatorio");
        bvia= false;
        return;
    }
    var viaV=/^[-_a-zA-Z0-9, ]+$/;
    if(String(via).match(viaV))
    {
        bvia= true;
    }
    else
    {
        avviso("erroreRegvia","La via non rispetta i canoni");
        bvia= false;
    }
}

function verificaCitta(){
	var citta = $("#citta").val();


    if(citta.length == 0){
        avviso("erroreRegcitta","Il campo e' obbligatorio");
        bcitta= false;
        return;
    }
    var cittaV=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if(String(citta).match(cittaV))
    {
        bcitta= true;
    }
    else
    {
        avviso("erroreRegcitta","Il nome della citta' non rispetta i canoni");
        bcitta= false;
    }
}

function verificaProvincia(){
	var provincia = $("#provincia").val();


    if(provincia.length == 0){
        avviso("erroreRegprovincia","Il campo e' obbligatorio");
        bprovincia= false;
        return;
    }
    var provinciaV=/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if(String(provincia).match(provinciaV))
    {
        bprovincia= true;
    }
    else
    {
        avviso("erroreRegprovincia","La provincia non rispetta i canoni");
        bprovincia= false;
    }
}

function verificaCap(){
	var cap = $("#cap").val();


    if(cap.length == 0){
        avviso("erroreRegcap","Il campo e' obbligatorio");
        bcap= false;
        return;
    }
    var capV=/^\d{5}$/;
    if(String(cap).match(capV))
    {
        bcap= true;
    }
    else
    {
        avviso("erroreRegcap","Il CAP non rispetta i canoni");
        bcap= false;
    }
}

function verificaTelefono(){
	var telefono = $("#tel").val();


    if(telefono.length == 0){
        avviso("erroreRegtelefono","Il campo e' obbligatorio");
        btelefono= false;
        return;
    }
    var telefonoV=/^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/;
    if(String(telefono).match(telefonoV))
    {
        btelefono= true;
    }
    else
    {
        avviso("erroreRegtelefono","Il telefono non rispetta i canoni");
        btelefono= false;
    }
}

function verificaNumcarta(){
	var numcarta = $("#ncarta").val();


    if(numcarta.length == 0){
        avviso("erroreRegnumcarta","Il campo e' obbligatorio");
        bnumcarta= false;
        return;
    }
    var numcartaV=/\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/;
    if(String(numcarta).match(numcartaV))
    {
        bnumcarta= true;
    }
    else
    {
        avviso("erroreRegnumcarta","Il numero della carta non rispetta i canoni");
        bnumcarta= false;
    }
}

function verificaNomecarta(){
	var nomecarta = $("#nomecarta").val();


    if(nomecarta.length == 0){
        avviso("erroreRegnomecarta","Il campo e' obbligatorio");
        bnomecarta= false;
        return;
    }
    var nomecartaV=/[A-Za-z]{1,19}/;
    if(String(nomecarta).match(nomecartaV))
    {
        bnomecarta= true;
    }
    else
    {
        avviso("erroreRegnomecarta","Il nome della carta non rispetta i canoni");
        bnomecarta= false;
    }
}

function verificaScadenza(){
	var scadenza = $("#scadenza").val();


    if(scadenza.length == 0){
        avviso("erroreRegscadenza","Il campo e' obbligatorio");
        bscadenza= false;
        return;
    }
    var scadenzaV=/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if(String(scadenza).match(scadenzaV))
    {
        bscadenza= true;
    }
    else
    {
        avviso("erroreRegscadenza","La scadenza della carta non rispetta i canoni");
        bscadenza= false;
    }
}

function verificaCvv(){
	var cvv = $("#cvv").val();


    if(cvv.length == 0){
        avviso("erroreRegcvv","Il campo e' obbligatorio");
        bcvv= false;
        return;
    }
    var cvvV=/^[0-9]{3}$/;
    if(String(cvv).match(cvvV))
    {
       bcvv= true;
    }
    else
    {
        avviso("erroreRegcvv","Il CVV inserito non rispetta i canoni");
        bcvv= false;
    }
}


