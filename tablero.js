export default class Tablero {
    constructor() {
        this._casillas = new Array(100)
    }
    generaTablero() {
        //cargando serpientes
        for (let i = 0; i < 10; i++) {
            let crearSer = Math.ceil(Math.random() * 100)
            if (this._casillas[crearSer] = 'undefined')
                this._casillas[crearSer] = 'S'
        }
        //cargando serpientes
        for (let i = 0; i < 10; i++) {
            let crearEsc = Math.ceil(Math.random() * 100)
            if (this._casillas[crearEsc] = 'undefined')
                this._casillas[crearEsc] = 'E'
        }
        for (let i = 0; i < 100; i++) {
            console.log(this._casillas[i] + ' ' + i)
        }

    }
    serpiente() {

    }
    escalera() {

    }

}
let app = new Tablero
app.generaTablero()