export default class Tablero {
    constructor() {
        this._casillas = new Array(100)
        this._consecuencia = new Array(100)
    }
    generaTablero() {
        //A qui todos los espacios de mi vector los reinicio a null
        for (let i = 0; i < 100; i++) {
            this._casillas[i] = null    
            this._casillas[i] = null
            this._consecuencia[i] = null
            this._consecuencia[i] = null
        }
        //genero a las serpientes y escaleras
        for (let i = 0; i < 10; ) {
            let crearSer = Math.ceil(Math.random() * 100)
            let crearEsc = Math.ceil(Math.random() * 100)
            let crearCola = Math.ceil(Math.random() * 100)
            let crearFin = Math.ceil(Math.random() * 100)

            if (this._casillas[crearEsc] == null && this._consecuencia[crearFin] == null && crearEsc < crearFin && this._casillas[crearSer] == null && this._consecuencia[crearCola] == null && crearSer > crearCola){
                this._casillas[crearEsc] = 'E' + i
                this._consecuencia[crearFin] = 'E' + i
                this._casillas[crearSer] = 'S' + i
                this._consecuencia[crearCola] = 'S' + i
                i++
            }
        }

    }
    serpiente() {

    }
    escalera() {

    }

}
let app = new Tablero
app.generaTablero()