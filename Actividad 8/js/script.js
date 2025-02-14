function MensajeSwitch(){
    let h= parseFloat(document.getElementById("h").value , 10);

    switch(h) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("resultado").innerHTML = "¡Buenos días!";
            document.getElementById("resultado").style.color = "black";
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("resultado").innerHTML = "¡Buenas tardes!";
            document.getElementById("resultado").style.color = "black";
        break;

        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:  
        case 6:
            document.getElementById("resultado").innerHTML = "¡Buenas noches!";
            document.getElementById("resultado").style.color = "black";
        break;

        default:
            document.getElementById("resultado").innerHTML = "ERROR";
            document.getElementById("resultado").style.color = "red";   
        break;
    }
}

function MensajeIf(){
    let h= parseFloat(document.getElementById("h").value , 10);

    if(h>6 && h<12){
        document.getElementById("resultado").innerHTML = "¡Buenos días!";
        document.getElementById("resultado").style.color = "black";
    }

    else if(h>11 && h<22){
        document.getElementById("resultado").innerHTML = "¡Buenas tardes!";
        document.getElementById("resultado").style.color = "black";
    }

    else if((h>21 && h<25) || (h>0 && h<7)){
        document.getElementById("resultado").innerHTML = "¡Buenas noches!";
        document.getElementById("resultado").style.color = "black";
    }

    else{
        document.getElementById("resultado").innerHTML = "ERROR";
        document.getElementById("resultado").style.color = "red";
    }
}