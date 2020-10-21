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
        this._posicion = this.setPosicion + aumento

        if(this._casillas[this._posicion] === null){
             return this._posicion
        }
        for(let i = 0; i<this._posicion; i++){
            if(this._casillas[this._posicion] === this._consecuencia[this._posicion]){
                this.serpiente(this._posicion)
                return true
            }
        }
        for(let i = this._posicion; i<100; i++){
            if(this._casillas[this._posicion] === this._consecuencia[this._posicion]){
                this.escalera(this._posicion)
                return true

            }
        }
        /*else if(this._casillas[this._posicion] ){
            this.serpiente(this._posicion)
        }
        else{
          this.escalera(this._posicion)  
        }*/

    }
}