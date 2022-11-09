// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoRey } from './piezas/rey.js';
import { movimientoHachero } from './piezas/hachero.js';
import {  movimientoLancero } from './piezas/lancero.js';
import { movimientoCaballero } from './piezas/caballero.js';
import { movimientoAsesino } from './piezas/asesino.js';
import { movimientoArcher } from './piezas/archer.js';
import { colorDisparoArcher, colorLago, colorMontana, colorOpciones, colorSeleccionadoListado, colorSeleccionadoTablero, colorTablero, lagos, montanas, tamanoTableroAncho, tamanoTableroLargo } from "./ConfiguracionTableroConquerGame.js";
import { eliminarLetras, eliminarNumeros, numeroAAlfabeto } from "../UtileriasPagina";
let pinkId = "";
let pinkText = "";
let turno = 0;
let bMovioAsesino = false;
let sPiezaMovimiento = "";
let arrReyes = []
let sTurno = ''


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
            // To delete the opposite element
            if (item.style.backgroundColor == colorOpciones && item.innerText.length == 0) {
                if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                    bMovioAsesino = true;
                }else{
                    turno ++
                    bMovioAsesino = false;
                }
            } else if (item.style.backgroundColor == colorOpciones && item.innerText.length !== 0) {
                //este segmento de codigo sirve para validar que se este eliminando la pieza
                document.querySelectorAll('.box').forEach(i => {
                    if (i.style.backgroundColor == colorSeleccionado) {
                        let pinkId2 = i.id
                        let pinkText2 = i.innerText
                        
                        document.getElementById(pinkId2).innerText = '';
                        let piezaAnterior = item.innerText;
    
                        document.getElementById(piezaAnterior).style.opacity = 0.5;
    
                        item.innerText = pinkText2
                        coloring()
                        insertImage()
                        if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                            bMovioAsesino = true;
                        }else{
                            turno ++
                            bMovioAsesino = false;
                        }
                        if(piezaAnterior.includes('rey')){
                            //detectamos la posicion del rey que estan atacando
                            const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
                            //detectamos la posicion del rey que esta ordenando el ataque.
                            const indexReyOrden = arrReyes.indexOf(pinkText2[0]+'rey');
                            if(indexReyMuerto < indexReyOrden){
                                turno--
                            }
    
                            if (indexReyMuerto > -1) { // only splice array when item is found
                                arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
                                //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
                            }
                        }
                    }
                })
            }else if (item.style.backgroundColor == colorDisparoArcher && item.innerText.length !== 0) {
                //este segmento de codigo sirve para validar que se este eliminando la pieza
                document.querySelectorAll('.box').forEach(i => {
                    if (i.style.backgroundColor == colorSeleccionado) {
                        item.innerText = '';
                        coloring()
                        insertImage()
                        if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                            bMovioAsesino = true;
                        }else{
                            turno ++
                            bMovioAsesino = false;
                        }
                        if(piezaAnterior.includes('rey')){
                            //detectamos la posicion del rey que estan atacando
                            const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
                            //detectamos la posicion del rey que esta ordenando el ataque.
                            const indexReyOrden = arrReyes.indexOf(pinkText2[0]+'rey');
                            if(indexReyMuerto < indexReyOrden){
                                turno--
                            }
    
                            if (indexReyMuerto > -1) { // only splice array when item is found
                                arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
                                //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
                            }
                        }
                    }
                })
            }
    
            const col= eliminarNumeros(item.id)
            const row = eliminarLetras(item.id)
    
            console.log(col)
            console.log(row)
            // Function to display the available paths for all pieces
    
            function whosTurn(toggle) {
                sPiezaMovimiento = item.innerText;
                if (item.innerText == `${toggle}archer` && !bMovioAsesino) {
                    movimientoArcher(parseInt(row),col,item)
                }else if (item.innerText == `${toggle}rey` && !bMovioAsesino) {
                    movimientoRey(parseInt(row),col,item)
                }else if (item.innerText == `${toggle}hachero` && !bMovioAsesino) {
                    movimientoHachero(parseInt(row),col,item)
                }else if(item.innerText == `${toggle}lancero` && !bMovioAsesino) {
                    movimientoLancero(parseInt(row),col,item)
                }else if(item.innerText == `${toggle}caballero` && !bMovioAsesino) {
                    movimientoCaballero(parseInt(row),col,item)
                }else if(item.innerText == `${toggle}asesino`) {
                    movimientoAsesino(parseInt(row),col,item,bMovioAsesino)
                }
            }
    
    
            // Toggling the turn
            evaluartTurnoJugador();
            whosTurn(arrReyes[turno][0])
            
            reddish(item.innerText)
            
            if(arrReyes.length === 1){
                //detectamos que jugador gano
                switch(arrReyes[0][0]){
                    case "W":
                        alert('White Wins !!')
                    break;
                    case "B":
                        alert('Black Wins !!')
                    break;
                    case "R":
                        alert('Red Wins !!')
                    break;
                    case "P":
                        alert('Purple Wins !!')
                    break;
                }
                // setTimeout(() => {
                //     window.open("http://127.0.0.1:5501/index.html","_self")
                // }, 600)
            }
        })
    
    })
    
    // // Moving the element
    document.querySelectorAll('.box').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            if (hathiTest.style.backgroundColor == colorSeleccionado) {
                pinkId = hathiTest.id;
                pinkText = hathiTest.innerText;
                document.querySelectorAll('.box').forEach(hathiTest2 => {
                    hathiTest2.addEventListener('click', function () {
                        if (hathiTest2.style.backgroundColor == colorOpciones && hathiTest2.innerText.length == 0) {    
                            document.getElementById(pinkId).innerText = '';
                            hathiTest2.innerText = pinkText;
                            coloring()
                            insertImage()
                            pinkId = '';
                            pinkText = '';
                        }
                    })
                })
            }
        })
    })


}
export const agregarImagenesListadoJuego = async(turnoUsuario) => {
    sTurno = turnoUsuario
    for ( const piecePosition in arregloPiezas ) {  
        const response  = await import(`@images/${sTurno+arregloPiezas[piecePosition].icono}.png`)  
        arregloPiezas[piecePosition].direccion = response.default
        let divElement = document.createElement("div");
        divElement.className = 'iconoMenu'
        divElement.id = arregloPiezas[piecePosition].nombre
        divElement.innerHTML = sTurno+arregloPiezas[piecePosition].nombre+`<img class='allimg' src="${arregloPiezas[piecePosition].direccion}" alt="">`
        divElement.style.cursor = 'pointer'
        document.getElementById("lista_personajes").appendChild(divElement);
    }
}

export const posicionPiezasJuego = (partida) => {
    for (const jugador of partida.jugadores) {
        for ( const piecePosition in jugador.posicionPiezasJugador ) {
            console.log(piecePosition)
            var div = document.getElementById(jugador.posicionPiezasJugador[piecePosition]);
            div.innerHTML += piecePosition.replace(/[0-9]/g, '');
            if(piecePosition.replace(/[0-9]/g, '').includes('rey')){
                arrReyes.push(piecePosition.replace(/[0-9]/g, ''))
            }
        }
    }
    insertImage()
}

const insertImage = () => {
    document.querySelectorAll('.box').forEach(async(image) => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            const response  = await import(`@images/${image.innerText}.png`)  
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
        if (i1.style.backgroundColor == colorSeleccionado) {
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



// Prvents from selecting multiple elements
let z = 0;
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== colorOpciones) {
            coloring()
        }
    })
})

export const saltarTurno = () =>{
    // Toggling the turn
    turno ++;
    bMovioAsesino = false;
    evaluartTurnoJugador()
}

const evaluartTurnoJugador = () => {
    if(turno +1 > arrReyes.length ){
        turno = 0
    }
    console.log(turno)
    console.log(arrReyes)
    switch(arrReyes[turno][0]){
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