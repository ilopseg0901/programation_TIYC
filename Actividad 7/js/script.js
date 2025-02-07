function Comprobar(){
    let n= parseFloat(document.getElementById("n").value , 10);
    let modulo= n%2

    if (modulo==0){
        document.getElementById("resultado").innerHTML = "El número es par"
    }

    else{
        document.getElementById("resultado").innerHTML = "El número es impar"
    }
}