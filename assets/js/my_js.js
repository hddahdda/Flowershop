// Jquery click event, avser då bilderna klickas.

$("img").click(function() {
    alert( "Bra val! Kika gärna vidare." );
});

// Form validering, kod  i stor delfrån https://www.youtube.com/watch?v=WY4rvU4ImgE
 
function validering() {
   var namn = document.getElementById("namn").value;
    var ämne = document.getElementById("ämne").value;
    var email = document.getElementById("email").value;
    var meddelande = document.getElementById("meddelande").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "15px";

    var text;
    if(namn.lenght < 2){
        text = "Var god skriv ert namn";
        error_message.innerHTML = text; 
        return false;
    }
    if(ämne.length < 7) {
        text = "Var god specifikera ämne";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Var god skriv korrekt emailadress";
        error_message.innerHTML = text;
        return false;
    }
    if(meddelande.length <= 70) {
        text = "Meddelandet får inte vara kortare än 70 tecken. ";
        error_message.innerHTML = text;
    }
    alert("Ditt meddelande har skickats!");
    return true;
}