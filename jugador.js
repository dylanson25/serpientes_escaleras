import Tablero from './tablero.js'

export default class jugador extends Tablero{
    constructor(nombre){
        this._posicion = 0
        this._nombre = nombre
    }
    mover(aumento){
        this._posicion=+ aumento
        if(this._casillas[this._posicion] === null) return this._posicion
        else if(this._casillas[this._posicion].startsWith('S') ){
            this.serpiente(this._posicion)
        }
        else{
          this.escalera(this._posicion)  
        }

    }
}