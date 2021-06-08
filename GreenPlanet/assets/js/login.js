/**
 *
 */
const email = "test@gmail.com";
const password = "password";



function validateForm() {


    var emailUtente =document.getElementById("email").value;
    var passwordUtente = document.getElementById("password").value;
    console.log(emailUtente+" "+passwordUtente);
    var bool = new Boolean(emailUtente == email && password == passwordUtente);

    if(bool == true){ 
        return true;
    }else{
        avvisa("Email o password errate");
        //location.replace("login.html");

        return false;
    }
    
    function avvisa(x){
    $("#errore").text(x);
    $("#errore").fadeIn();
    $("#errore").delay(3000).fadeOut();
}
   
}

