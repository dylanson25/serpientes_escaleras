import Tablero from './tablero.js'
import Dado from './dado.js'
import Jugador from './jugador.js'

let tablero = new Tablero
let dado = new Dado
let jugador1 = new Jugador('dylan')
let jugador2 = new Jugador('hani')

tablero.generaTablero()
do {
    jugador1.mover(dado.lanzar())
    jugador2.mover(dado.lanzar())
    console.log('el jugador 1 esta en '+ jugador1.setPosicion()+'|jugador 2 esta en '+ jugador2.setPosicion())
} while (jugador1.setPosicion() < 100 || jugador2.setPosicion() < 100)
if(jugador1.setPosicion()>100 && jugador2.setPosicion()>100){
    console.log(empate)
}
else if(jugador2.setPosicion()>100){
    console.log('gano el jugador 2')
}
else{
    console.log('gano el jugador 1')
    
}