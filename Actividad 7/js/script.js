function Comprobar(){
    let n= parseFloat(document.getElementById("n").value , 10);

    if (n>=0 && n<=10){
        if(n<5){
            document.getElementById("resultado").innerHTML = "Suspenso."
            document.getElementById("resultado").style.color = "red"
        }
        
        else{
            if(n<6){
                document.getElementById("resultado").innerHTML = "Suficiente."
                document.getElementById("resultado").style.color = "orange"
            }

            else{
                if(n<7){
                    document.getElementById("resultado").innerHTML = "Bien."
                    document.getElementById("resultado").style.color = "yellow"
                }
    
                else{
                    if(n<9){
                        document.getElementById("resultado").innerHTML = "Notable."
                        document.getElementById("resultado").style.color = "green"
                    }
        
                    else{
                        document.getElementById("resultado").innerHTML = "Sobresaliente."
                        document.getElementById("resultado").style.color = "blue"
                    }
                }
            }
        }
    }

    else{
        document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida."
    }
}
