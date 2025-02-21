function Calificar() {
    let notas = [];

 /*   for (let i=0 ; i<=3 ; i=i+1) {
        notas[i] = parseInt(prompt("¿Qué nota tiene ?"), 10);

    }
*/

    notas[0] = parseInt(prompt("¿Qué nota tiene Stan?"), 10);
    notas[1] = parseInt(prompt("¿Qué nota tiene Kyle?"), 10);
    notas[2] = parseInt(prompt("¿Qué nota tiene Eric?"), 10);
    notas[3] = parseInt(prompt("¿Qué nota tiene Kenny?"), 10);

    document.getElementById("resultado").innerHTML = "Las notas son: <br> Stan: " + notas[0] + "<br> Kyle: " + notas[1] + "<br> Eric: " + notas[2] + "<br> Kenny: " + notas[3];
}