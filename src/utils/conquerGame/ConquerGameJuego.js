// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoRey } from './piezas/rey.js';
import { movimientoHachero } from './piezas/hachero.js';
import {  movimientoLancero } from './piezas/lancero.js';
import { movimientoCaballero } from './piezas/caballero.js';
import { movimientoAsesino } from './piezas/asesino.js';
import { movimientoArcher } from './piezas/archer.js';
import { colorDisparoArcher, colorLago, colorMontana, colorOpciones, colorSeleccionadoListado, colorSeleccionadoTablero, colorTablero, lagos, montanas, tamanoTableroAncho, tamanoTableroLargo } from "./ConfiguracionTableroConquerGame.js";
import { eliminarLetras, eliminarNumeros, numeroAAlfabeto } from "../UtileriasPagina";
import { actualizarEspecifico } from '../ConexionAPI.js';
let pinkId = "";
let pinkText = "";
let nTurno = 0;
let bMovioAsesino = false;
let sPiezaMovimiento = "";
let arrReyes = []
let sJugador = ''
let z = 0;
let partida = {};

let posicionPiezasGlobal = {} 

let arregloPiezas = [{
    nombre:"hachero1",
    icono:"hachero",
},{
    nombre:"hachero2",
    icono:"hachero",
},
{
    nombre:"lancero1",
    icono:"lancero",
},
{
    nombre:"lancero2",
    icono:"lancero",
},
{
    nombre:"lancero3",
    icono:"lancero",
},
{
    nombre:"lancero4",
    icono:"lancero",
},
{
    nombre:"archer",
    icono:"archer",
},
{
    nombre:"asesino",
    icono:"asesino",
},
{
    nombre:"caballero1",
    icono:"caballero",
},
{
    nombre:"caballero2",
    icono:"caballero",
},
{
    nombre:"caballero3",
    icono:"caballero",
},
{
    nombre:"caballero4",
    icono:"caballero",
},
{
    nombre:"rey",
    icono:"rey",
}
]

export const agregarDivsTableroJuego = () => {
    for(let nContRow=tamanoTableroLargo;nContRow>0;nContRow--){
        let divElement = document.createElement("div");
        divElement.id = "row"+nContRow;
        divElement.className = "row";  
        document.getElementById("tablero_juego").appendChild(divElement);
        for(let nContCol=1;nContCol<tamanoTableroAncho+1;nContCol++){
            let liElement2 = document.createElement("li");
            liElement2.id = nContRow+numeroAAlfabeto(nContCol);
            //Se toma la desicion de como se pintara el tablero
            if(lagos.includes(liElement2.id)){
                liElement2.className = "box blue-box";
            }else if(montanas.includes(liElement2.id )){
                liElement2.className = "box green-box";
            }else{
                liElement2.className = "box white-box";
            }
            document.getElementById("row"+nContRow).appendChild(liElement2);
        }
    }

    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('click', function () {

            //hacemos respetar el turno del usuario
            if(!esJugadorTurno()) return

            // To delete the opposite element
            if (item.style.backgroundColor == colorOpciones && item.innerText.length == 0) {
                if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                    bMovioAsesino = true;
                }else{
                    nTurno ++
                    bMovioAsesino = false;
                }
                console.log('entre al proceso que tiene')
                console.log('pieza')
                console.log(sPiezaMovimiento)
                posicionPiezasGlobal[sPiezaMovimiento] = item.id
                console.log('item.id')
                console.log(item.id)
                console.log('posicionPiezasGlobal[sPiezaMovimiento]')
                console.log(posicionPiezasGlobal)
                //en este segmento enviaremos la peticion de la posicion de las unidades
            }else if (item.style.backgroundColor == colorOpciones && item.innerText.length !== 0) {
                //este segmento de codigo sirve para validar que se este eliminando la pieza
                document.querySelectorAll('.box').forEach(i => {
                    if (i.style.backgroundColor == colorSeleccionadoTablero) {
                        let pinkId2 = i.id
                        let pinkText2 = i.innerText
                        
                        document.getElementById(pinkId2).innerText = '';
                        let piezaAnterior = item.innerText;
                        //Sirve para indicar si una pieza esta muerta o no
                        //document.getElementById(piezaAnterior).style.opacity = 0.5;
    
                        item.innerText = pinkText2
                        coloringJuego()
                        insertImage()
                        if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                            bMovioAsesino = true;
                        }else{
                            nTurno ++
                            bMovioAsesino = false;
                        }

                        posicionPiezasGlobal[piezaAnterior] = ''
                        posicionPiezasGlobal[sPiezaMovimiento] = item.id

                        if(piezaAnterior.includes('rey')){
                            //detectamos la posicion del rey que estan atacando
                            const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
                            //detectamos la posicion del rey que esta ordenando el ataque.
                            const indexReyOrden = arrReyes.indexOf(pinkText2[0]+'rey');
                            if(indexReyMuerto < indexReyOrden){
                                nTurno--
                            }
    
                            if (indexReyMuerto > -1) { // only splice array when item is found
                                arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
                                //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
                            }
                        }
                    }
                })
            }
            //else if (item.style.backgroundColor == colorDisparoArcher && item.innerText.length !== 0) {
            //     //este segmento de codigo sirve para validar que se este eliminando la pieza
            //     document.querySelectorAll('.box').forEach(i => {
            //         if (i.style.backgroundColor == colorSeleccionadoTablero) {
            //             item.innerText = '';
            //             coloringJuego()
            //             insertImage()
            //             if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
            //                 bMovioAsesino = true;
            //             }else{
            //                 nTurno ++
            //                 bMovioAsesino = false;
            //             }
            //             if(piezaAnterior.includes('rey')){
            //                 //detectamos la posicion del rey que estan atacando
            //                 const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
            //                 //detectamos la posicion del rey que esta ordenando el ataque.
            //                 const indexReyOrden = arrReyes.indexOf(pinkText2[0]+'rey');
            //                 if(indexReyMuerto < indexReyOrden){
            //                     nTurno--
            //                 }
    
            //                 if (indexReyMuerto > -1) { // only splice array when item is found
            //                     arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
            //                     //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
            //                 }
            //             }
            //         }
            //     })
            // }
    
            const col= eliminarNumeros(item.id)
            const row = eliminarLetras(item.id)
    
            console.log(col)
            console.log(row) 
    
            // // Toggling the turn
            evaluartTurnoJugador();

            sPiezaMovimiento = item.innerText;
            if (item.innerText.includes(`${sJugador}archer`) && !bMovioAsesino) {
                movimientoArcher(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}rey`) && !bMovioAsesino) {
                movimientoRey(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}hachero`) && !bMovioAsesino) {
                movimientoHachero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}lancero`) && !bMovioAsesino) {
                movimientoLancero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}caballero`) && !bMovioAsesino) {
                movimientoCaballero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}asesino`)) {
                movimientoAsesino(parseInt(row),col,item,bMovioAsesino)
            }
            
            reddish(item.innerText)
        })
    
    })
    
    // // Moving the element
    document.querySelectorAll('.box').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            if (hathiTest.style.backgroundColor == colorSeleccionadoTablero) {
                pinkId = hathiTest.id;
                pinkText = hathiTest.innerText;
                document.querySelectorAll('.box').forEach(hathiTest2 => {
                    hathiTest2.addEventListener('click', function () {
                        if (hathiTest2.style.backgroundColor == colorOpciones && hathiTest2.innerText.length == 0) {    
                            document.getElementById(pinkId).innerText = '';
                            hathiTest2.innerText = pinkText;
                            coloringJuego()
                            insertImage()
                            pinkId = '';
                            pinkText = '';
                        }
                    })
                })
            }
        })
    })

    // Prvents from selecting multiple elements
    document.querySelectorAll('.box').forEach(ee => {
        ee.addEventListener('click', function () {
            z = z + 1
            if (z % 2 == 0 && ee.style.backgroundColor !== colorOpciones) {
                coloringJuego()
            }
        })
    })
}


export const agregarImagenesListadoJuego = async(turnoUsuario) => {
    sJugador = turnoUsuario
    for ( const piecePosition in arregloPiezas ) {  
        const response  = await import(`@images/${sJugador+arregloPiezas[piecePosition].icono}.png`)  
        arregloPiezas[piecePosition].direccion = response.default
        let divElement = document.createElement("div");
        divElement.className = 'iconoMenu'
        divElement.id = arregloPiezas[piecePosition].nombre
        divElement.innerHTML = sJugador+arregloPiezas[piecePosition].nombre+`<img class='allimg' src="${arregloPiezas[piecePosition].direccion}" alt="">`
        divElement.style.cursor = 'pointer'
        document.getElementById("lista_personajes").appendChild(divElement);
    }
}

export const posicionPiezasJuego = (partida) => {
    console.log('partida')
    console.log(partida)
    arrReyes = [];
    posicionPiezasGlobal = {};
    if(partida.hasOwnProperty("posicionPiezasGlobal")){
        //limpiamos las piezas del mapa para volverlas a colocar
        document.querySelectorAll('.box').forEach(ee => {
            ee.innerHTML = ''
        })
        for ( const piecePosition in partida.posicionPiezasGlobal ) {
            posicionPiezasGlobal[piecePosition] = partida.posicionPiezasGlobal[piecePosition];
            const div = document.getElementById(partida.posicionPiezasGlobal[piecePosition]);
            if (typeof(div) != 'undefined' && div != null){
                div.innerHTML = piecePosition.replace(' ','')    
                if(piecePosition.replace(/[0-9]/g, '').includes('rey')){
                    arrReyes.push(piecePosition.replace(/[0-9]/g, ''))
                }
            }
        }
    }else{
        for (const jugador of partida.jugadores) {
            for ( const piecePosition in jugador.posicionPiezasJugador ) {
                posicionPiezasGlobal[piecePosition] = jugador.posicionPiezasJugador[piecePosition];
                console.log(piecePosition)
                var div = document.getElementById(jugador.posicionPiezasJugador[piecePosition]);
                div.innerHTML = piecePosition.replace(' ','');
                if(piecePosition.replace(/[0-9]/g, '').includes('rey')){
                    arrReyes.push(piecePosition.replace(' ',''))
                }
            }
        }
    }
    console.log('posicionPiezasGlobal')
    console.log(posicionPiezasGlobal)
    insertImage()
    evaluarResultadoPartida()
}

const insertImage = () => {
    document.querySelectorAll('.box').forEach(async(image) => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            const response  = await import(`@images/${eliminarNumeros(image.innerText)}.png`)  
            image.innerHTML = `${image.innerText} <img class='allimg' src="${response.default}" alt="">`
            image.style.cursor = 'pointer'
        }
    })
}

export const coloringJuego  = () => {
    document.querySelectorAll('.white-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorTablero; 
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorMontana; 
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorLago; 
    })
}

//function to not remove the same team element
function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == colorSeleccionadoTablero) {
            document.querySelectorAll('.box').forEach(i2 => {
                if ((i2.style.backgroundColor == colorOpciones || i2.style.backgroundColor == colorDisparoArcher)) {
                    if(i2.innerText.length !== 0){
                        let greenText = i2.innerText
                        let pinkText3 = i1.innerText;
                        let pinkColor = ((Array.from(pinkText3)).shift()).toString()
                        let greenColor = ((Array.from(greenText)).shift()).toString()
                        //En esta validacion se pregunta si la pieza es del mismo valor (B,W) a otra del mismo
                        //team, aparte de condicionar si es un lago o una montana
                        if (pinkColor == greenColor) {
                            i2.style.backgroundColor = colorTablero
                        }
                    }
                }
            })
        }
    })
}

export const saltarTurno = () =>{
    // Toggling the turn
    nTurno ++;
    bMovioAsesino = false;
    evaluartTurnoJugador()
}

const evaluartTurnoJugador = () => {
    if(nTurno +1 > arrReyes.length ){
        nTurno = 0
    }
    console.log('evaluartTurnoJugador')
    console.log(nTurno)
    console.log(arrReyes)
    actualizarPiezasPosicionJuego()
    switch(arrReyes[nTurno][0]){
        case "W":
            document.getElementById('tog').innerText = "White's Turn"
        break;
        case "B":
            document.getElementById('tog').innerText = "Black's Turn"
        break;
        case "R":
            document.getElementById('tog').innerText = "Red's Turn"
        break;
        case "P":
            document.getElementById('tog').innerText = "Purple's Turn"
        break;
    } 
}

export const setCantidadJugadores = (cantidadJugadoresT) =>{
    nCantidadJugadores = cantidadJugadoresT;
}

export const setPartida = (partidaT) =>{
    partida = partidaT;
}

export const setTurno = (turno) => {
    console.log('turno')
    console.log(turno)
    nTurno = turno;
}

const esJugadorTurno = () => {
    console.log(arrReyes)
    console.log(nTurno)
    if(sJugador === arrReyes[nTurno][0]){
        console.log('es tu turno')
        return true
    }
    console.log('no es tu turno')
    return false;
}

const actualizarPiezasPosicionJuego = () => {
    let vResultado = {}
    vResultado.numeroPartida = partida.numeroPartida
    vResultado.posicionPiezasGlobal = posicionPiezasGlobal;
    vResultado.turno = nTurno;

    actualizarEspecifico('conquerGame/actualizarPiezasPosicionJuego',vResultado)
    .then((resultado) => {
    })
    .catch((error) => {
        swal({
        title: 'Error',
        text: error.toString(),
        icon: 'error',
        button: 'OK',
        });
    });
}

const evaluarResultadoPartida = () => {
    if(arrReyes.length === 1){
        //detectamos que jugador gano
        let sMensaje = ''
        switch(arrReyes[0][0]){
            case "W":
                sMensaje = 'White Wins !!'
            break;
            case "B":
                sMensaje = 'Black Wins !!'
                alert('Black Wins !!')
            break;
            case "R":
                sMensaje = 'Red Wins !!'
            break;
            case "P":
                sMensaje = 'Purple Wins !!'
            break;
        }
        swal({
            title: sMensaje,
            text: 'Fin de la partida',
            icon: 'success',
            button: 'OK',
          });
        //AGREGAR METODO PARA GUARDAR LA INFORMACION DEL ULTIMO MOVIMIENTO Y DEL GANADOR
        //TODO
    }
}