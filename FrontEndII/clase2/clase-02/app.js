// 1- Tijera, 2- Papel, 3- Piedra

let puntajeMaquina = 0;
let puntajeJugador = 0;

while (puntajeMaquina < 2 && puntajeJugador < 2) {
    
    let seleccion = parseInt(prompt("Digite: 1- Tijera, 2- Papel, 3- Piedra: "))
    let maquina = parseInt(Math.random() * 3 + 1)
    
    console.log(seleccion);
    console.log(maquina);
    
    if (isNaN(seleccion)) 
        console.log("DATO NO VALIDO")
    else {
        if (seleccion < 1 || seleccion > 3)
            console.log("DATO NO VALIDO")
        else {
            if (seleccion == maquina)
                console.log("EMPATE")
            else {
                if ((seleccion == 1 && maquina == 2) || (seleccion == 2 && maquina == 3) || (seleccion == 3 && maquina == 1))
                {
                    console.log("GANASTE")
                    puntajeJugador++;
                }    
                else
                {
                    console.log("PERDISTE")
                    puntajeMaquina++;
                }
            }   
        }
    }
}

if (puntajeMaquina > puntajeJugador)
    console.log("GANO LA MAQUINA")
else
    console.log("GANO EL JUGADOR")
