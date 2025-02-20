Factorial(){
    let n= parseInt(document.getElementById("n").value , 10);
    let f= parseInt(1, 10);
    let i= parseInt(0, 10);

    while (i<n){
        i=i+1;
        f=f*i;

        alert("AAAAAAAAAAA")
    }

    document.getElementById("resultado").innerHTML = "El factorial de" + n + "es" + f; 
}