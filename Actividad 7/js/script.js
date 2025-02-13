function Comprobar(){
    let n= parseFloat(document.getElementById("n").value , 10);

    if (n>=0 && n<=10){
        if(n<5){
            document.getElementById("resultado").innerHTML = "Suspenso."
        }
        
        else{
            if(n<6){
                document.getElementById("resultado").innerHTML = "Suficiente."
            }

            else{
                if(n<7){
                    document.getElementById("resultado").innerHTML = "Bien."
                }
    
                else{
                    if(n<9){
                        document.getElementById("resultado").innerHTML = "Notable."
                    }
        
                    else{
                        document.getElementById("resultado").innerHTML = "Sobresaliente."
                    }
                }
            }
        }
    }

    else{
        document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida."
    }
}
