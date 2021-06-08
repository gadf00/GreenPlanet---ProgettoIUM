var bemail = false;
var bpassword = false;


function avviso(id,mex){
    $("#"+id).html(mex);
    $("#"+id).fadeIn("slow");
    $("#"+id).delay(1000).fadeOut("slow");
}

function controlla(){
    verificaEmail();
    verificaPassword();
   

    if(bemail && bpassword){
        location.replace("login.html");
       
        return true;
    }else{
        return false;
    }
}



function verificaEmail()
{
    var email = $("#email").val();


    if(email.length == 0){
        avviso("erroreRegmail","Il campo e' obbligatorio");
        bemail= false;
        return;
    }
    var emailV=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w+)+$/;
    if(String(email).match(emailV))
    {
        localStorage['emailUtente'] = email;
        bemail= true;
    }
    else
    {
        avviso("erroreRegmail","La mail non rispetta i canoni");
        bemail= false;
    }
}

function verificaPassword()
{

    var pass=$("#password").val();
    if(pass.length==0){
        avviso("erroreRegpass","Il campo non puo' essere nullo");
        bpassword= false;
        return;
    }
    if(pass.length > 20){
        avviso("erroreRegpass","La lunghezza deve essere inferiore a 20");
        bpassword= false;
        return;
    }
    var passv=/^[0-9a-zA-Z]+$/;
    if(String(pass).match(passv))
    {
        localStorage['passwordUtente'] = pass;
        bpassword=true;
    }
    else
    {
        avviso("erroreRegpass","La password non rispetta i canoni");
        bpassword=false;
    }
}
