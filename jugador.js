import Tablero from './tablero.js'

export default class Jugador extends Tablero{
    constructor(nombre){
      super()  
        this._posicion = 0
        this._nombre = nombre
    }
    setPosicion(){
        return this._posicion
    }
    mover(aumento){
        this._posicion=+ aumento

        if(this._casillas[this._posicion] === null){
             return this._posicion
        }
        else if(this._casillas[this._posicion] ){
            this.serpiente(this._posicion)
        }
        else{
          this.escalera(this._posicion)  
        }

    }
}