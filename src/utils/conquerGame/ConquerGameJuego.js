// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoRey } from './piezas/rey.js';
import { movimientoHachero } from './piezas/hachero.js';
import {  movimientoLancero } from './piezas/lancero.js';
import { movimientoCaballero } from './piezas/caballero.js';
import { movimientoAsesino } from './piezas/asesino.js';
import { movimientoArcher } from './piezas/archer.js';
import { colorDisparoArcher, colorLago, colorMontana, colorOpciones, colorSeleccionadoListado, colorSeleccionadoTablero, colorTablero, lagos, montanas, tamanoTableroAncho, tamanoTableroLargo,arregloPiezas } from "./ConfiguracionTableroConquerGame.js";
import { alfabetoANumero, eliminarLetras, eliminarNumeros, numeroAAlfabeto } from "../UtileriasPagina";
import { actualizarEspecifico } from '../ConexionAPI.js';
import { movimientoAsesinoElite } from './piezas/asesinoElite.js';
import { movimientoHechicero } from './piezas/hechicero.js';
import { movimientoArcherElite } from './piezas/archerElite.js';
import { movimientoCanon } from './piezas/canon.js';
import { movimientoLanceroElite } from './piezas/lanceroElite.js';
import { movimientoHacheroElite } from './piezas/hacheroElite.js';
let pinkId = "";
let pinkText = "";
let nTurno = 0;
let bMovioAsesino = false;
let bMovioAsesinoElite = false;
let sPiezaMovimiento = "";
let arrReyes = []
let sJugador = ''
let z = 0;
let partida = {};
let posicionPiezasGlobal = {} 
let nIntervalo = null;
let mostrarMenuUnidadEspecial = null;
let sAgregarPiezaEspecial = "";
export const mostrarMenuUnidadEspecialM = (vMetodo) => {
    mostrarMenuUnidadEspecial = vMetodo;
    return;
}

export const limpiarVariablesJuego = () => {
    pinkId = "";
    pinkText = "";
    nTurno = 0;
    bMovioAsesino = false;
    sPiezaMovimiento = "";
    arrReyes = []
    sJugador = ''
    z = 0;
    partida = {};
    posicionPiezasGlobal = {}
    nIntervalo = null;
    bMovioAsesinoElite = false;
}

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
            if(sAgregarPiezaEspecial !== ""){
                agregarPiezaEspecialClick(item.id)
                return;
            }

            //hacemos respetar el turno del usuario
            if(!esJugadorTurno()) return
            
            // To delete the opposite element
            if (item.style.backgroundColor == colorOpciones && item.innerText.length == 0) {
                //Se realiza la evaluacion con el asesino elite para poder evaluar primero con el caracter
                if(sPiezaMovimiento.includes('asesinoE') && !bMovioAsesinoElite){
                    bMovioAsesinoElite = true;
                }else if(sPiezaMovimiento.includes('asesino') && !sPiezaMovimiento.includes('asesinoE') && !bMovioAsesino){
                    bMovioAsesino = true;
                }else{
                    nTurno ++
                    bMovioAsesino = false;
                    bMovioAsesinoElite = false;
                }
                posicionPiezasGlobal[sPiezaMovimiento] = item.id
                
                evaluartTurnoJugador();
                return;
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
                        //Se realiza la evaluacion con el asesino elite para poder evaluar primero con el caracter
                        if(sPiezaMovimiento.includes('asesinoE') && !bMovioAsesinoElite){
                            bMovioAsesinoElite = true;
                        }else if(sPiezaMovimiento.includes('asesino') && !sPiezaMovimiento.includes('asesinoE') && !bMovioAsesino){
                            bMovioAsesino = true;
                        }else{
                            nTurno ++
                            bMovioAsesino = false;
                            bMovioAsesinoElite = false;
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
                            if(arrReyes.length > 1){
                                mostrarMenuUnidadEspecial(true)
                                sAgregarPiezaEspecial = "pieza"
                                return;
                            }else{
                                evaluartTurnoJugador();
                                return;
                            }
                        }else{
                            evaluartTurnoJugador();
                            return;
                        }
                    }
                })
            }else if (item.style.backgroundColor == colorDisparoArcher && item.innerText.length !== 0) {
                //este segmento de codigo sirve para validar que se este eliminando la pieza
                document.querySelectorAll('.box').forEach(i => {
                    if (i.style.backgroundColor == colorSeleccionadoTablero) {
                        let piezaAnterior = item.innerText;
                        let pinkText2 = i.innerText
                        posicionPiezasGlobal[piezaAnterior] = ''
                        item.innerText = '';
                        coloringJuego()
                        insertImage()
                        if(sPiezaMovimiento.includes('asesinoE') && !sPiezaMovimiento.includes('asesinoE') && !bMovioAsesinoElite){
                            bMovioAsesinoElite = true;
                        }else if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                            bMovioAsesino = true;
                        }else{
                            nTurno ++
                            bMovioAsesino = false;
                            bMovioAsesinoElite = false;
                        }
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
                            console.log(arrReyes)
                            if(arrReyes.length > 1){
                                mostrarMenuUnidadEspecial(true)
                                sAgregarPiezaEspecial = "pieza"
                                return;
                            }else{
                                evaluartTurnoJugador();
                                return;
                            }
                        }else{
                            evaluartTurnoJugador();
                            return;
                        }
                    }
                })
            }
    
            const col= eliminarNumeros(item.id)
            const row = eliminarLetras(item.id)
    
            // // Toggling the turn
            sPiezaMovimiento = item.innerText;
            if (item.innerText.includes(`${sJugador}archerE`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoArcherElite(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}archer`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoArcher(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}rey`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoRey(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}hacheroE`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoHacheroElite(parseInt(row),col,item)
            }else if (item.innerText.includes(`${sJugador}hachero`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoHachero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}lanceroE`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoLanceroElite(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}lancero`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoLancero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}caballero`) && !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoCaballero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}asesinoE`) && !bMovioAsesino) {
                //Las unidades especiales que se llamen igual que el original deben ir primero para que el algoritno no lo confunda con la pieza normal
                movimientoAsesinoElite(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}asesino`) && !bMovioAsesinoElite) {
                movimientoAsesino(parseInt(row),col,item,bMovioAsesino)
            }else if(item.innerText.includes(`${sJugador}hechicero`)&& !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoHechicero(parseInt(row),col,item)
            }else if(item.innerText.includes(`${sJugador}canon`)&& !bMovioAsesino && !bMovioAsesinoElite) {
                movimientoCanon(parseInt(row),col,item)
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

//indica el listado de las piesas del usuario
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
    arrReyes = [];
    posicionPiezasGlobal = {};
    if(partida.hasOwnProperty("posicionPiezasGlobal")){
        //limpiamos las piezas del mapa para volverlas a colocar
        document.querySelectorAll('.box').forEach(ee => {
            ee.innerHTML = ''
            ee.title = ''
            ee.style.cursor = 'default'
        })
        for ( const piecePosition in partida.posicionPiezasGlobal ) {
            posicionPiezasGlobal[piecePosition] = partida.posicionPiezasGlobal[piecePosition];
            const div = document.getElementById(partida.posicionPiezasGlobal[piecePosition]);
            if (typeof(div) != 'undefined' && div != null){
                div.innerHTML = piecePosition.replace(' ','')
                div.title = eliminarNumeros(piecePosition.substring(1)) +"\nPieza " + getColorPorLetra(piecePosition[0])   
                if(piecePosition.replace(/[0-9]/g, '').includes('rey')){
                    arrReyes.push(piecePosition.replace(/[0-9]/g, ''))
                }
            }
        }
    }
    insertImage()
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
const reddish = () => {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == colorSeleccionadoTablero) {
            document.querySelectorAll('.box').forEach(i2 => {
                if ((i2.style.backgroundColor == colorOpciones || i2.style.backgroundColor == colorDisparoArcher)) {
                    if(i2.innerText.length !== 0){
                        let greenText = i2.innerText
                        let pinkText3 = i1.innerText;
                        let pinkColor = ((Array.from(pinkText3)).shift()).toString()
                        let greenColor = ((Array.from(greenText)).shift()).toString()
                        //En esta validacion se pregunta si la pieza es del mismo valor (B,O) a otra del mismo
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
    
    if(sAgregarPiezaEspecial === ""){
        if(!esJugadorTurno()){
            return;
        }
        nTurno ++;
    }else{
        mostrarMenuUnidadEspecial(false)
        pintarMapaOpacity(false)
        sAgregarPiezaEspecial = ""
    }
    
    // Toggling the turn
    coloringJuego()
    bMovioAsesino = false;
    bMovioAsesinoElite = false;
    evaluartTurnoJugador()
}

const evaluartTurnoJugador = () => {
    detenerCronometro()
    if(nTurno +1 > arrReyes.length ){
        nTurno = 0
    }
    actualizarPiezasPosicionJuego()
}
//toast representa el metodo para mostrar mensaje del jugador en turno
export const indicarSiguienteJugador = () =>{
    if(arrReyes.length <= 0){
        return;
    }

    if(document.getElementById(`targetaJugador0`)!==null && !document.getElementById(`targetaJugador0`).classList.contains("opa-50")){
        document.getElementById(`targetaJugador0`).classList.add("opa-50")
    }

    if(document.getElementById(`targetaJugador1`)!==null && !document.getElementById(`targetaJugador1`).classList.contains("opa-50")){
        document.getElementById(`targetaJugador1`).classList.add("opa-50")
    }
    
    if(document.getElementById(`targetaJugador2`)!==null && !document.getElementById(`targetaJugador2`).classList.contains("opa-50")){
        document.getElementById(`targetaJugador2`).classList.add("opa-50")
    }
    
    if(document.getElementById(`targetaJugador3`)!==null && !document.getElementById(`targetaJugador3`).classList.contains("opa-50")){
        document.getElementById(`targetaJugador3`).classList.add("opa-50")
    }
    switch(arrReyes[nTurno][0]){
        case "O":
            if(document.getElementById(`targetaJugador0`)!==null && document.getElementById(`targetaJugador0`).classList.contains("opa-50")){
                document.getElementById(`targetaJugador0`).classList.remove("opa-50");
            }
        break;
        case "B":
            if(document.getElementById(`targetaJugador1`)!==null && document.getElementById(`targetaJugador1`).classList.contains("opa-50")){
                document.getElementById(`targetaJugador1`).classList.remove("opa-50");
            }
        break;
        case "R":
            if(document.getElementById(`targetaJugador2`)!==null && document.getElementById(`targetaJugador2`).classList.contains("opa-50")){
                document.getElementById(`targetaJugador2`).classList.remove("opa-50");
            }
        break;
        case "P":
            
            if(document.getElementById(`targetaJugador3`)!==null && document.getElementById(`targetaJugador3`).classList.contains("opa-50")){
                document.getElementById(`targetaJugador3`).classList.remove("opa-50");
            }
        break;
    } 
    return esJugadorTurno();
}

export const setCantidadJugadores = (cantidadJugadoresT) =>{
    nCantidadJugadores = cantidadJugadoresT;
}

export const setPartida = (partidaT) =>{
    partida = partidaT;
}

export const setTurno = (turno) => {
    nTurno = turno;
}

const esJugadorTurno = () => {
    if(arrReyes === null || arrReyes.length <= 0){
        return false;
    }
    if(sJugador === arrReyes[nTurno][0]){
        return true
    }
    return false;
}

const actualizarPiezasPosicionJuego = (bRendirse) => {
    let vResultado = {}
    vResultado.numeroPartida = partida.numeroPartida
    vResultado.posicionPiezasGlobal = posicionPiezasGlobal;
    if(!bRendirse){
        vResultado.turno = nTurno;
    }

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

export const evaluarResultadoPartida = (partidaT) => {
    //detectamos que jugador gano
    return getColorPorLetra(partidaT.ganador) + " Ganan !!"
}

export const conometro =(partidaT) =>{

    if(!partidaT.hasOwnProperty('fechaTurno')){
        return;
    }
    detenerCronometro()
    var countDownDate = new Date(partidaT.fechaTurno).getTime() + 1*60000;
    // Update the count down every 1 second
    nIntervalo = setInterval(function() {
        // Get today's date and time
        var now = Date.now(partidaT.fechaTurno);
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById("temporizador").innerHTML = minutes + "m " + seconds + "s ";
        if(esJugadorTurno()){
            document.getElementById("temporizador").classList.remove("col-gray")
            document.getElementById("tiempo").classList.remove("col-gray")
            if(seconds === 20){
                document.getElementById("temporizador").classList.add("col-orange")
                document.getElementById("tiempo").classList.add("col-orange")        
            }else if(seconds === 10){
                document.getElementById("temporizador").classList.remove("col-orange")
                document.getElementById("tiempo").classList.remove("col-orange")
                document.getElementById("temporizador").classList.add("col-red")
                document.getElementById("tiempo").classList.add("col-red")
            }
        }else{
            document.getElementById("temporizador").classList.remove("col-orange")
            document.getElementById("tiempo").classList.remove("col-orange")
            document.getElementById("temporizador").classList.remove("col-red")
            document.getElementById("tiempo").classList.remove("col-red")
            document.getElementById("temporizador").classList.add("col-gray")
            document.getElementById("tiempo").classList.add("col-gray")
        }
            
        // If the count down is over, write some text 
        if (distance < 0) {
            saltarTurno()
            document.getElementById("temporizador").innerHTML = 0 + "m " + 0 + "s ";
        }
    }, 1000);

}

export const detenerCronometro = () =>{
    if(nIntervalo !=null){
        clearInterval(nIntervalo)
        nIntervalo=null;
    }
}

export const rendirseJugador = () => {
    posicionPiezasGlobal[sJugador+"rey"] = ''
    actualizarPiezasPosicionJuego(false)
}

export const colocarPiezaEspecial = (sPieza) => {
    pintarMapaOpacity(true)
    sAgregarPiezaEspecial = sPieza;
}

export const pintarMapaOpacity = (bPintarOpacity) => {
    document.querySelectorAll('.box').forEach(colorNegro => {
        if(bPintarOpacity){
            const nValor = eliminarLetras(colorNegro.id)
            switch (partida.cantidadJugadores){
                case 3:
                    if((sJugador === "O" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
                    (sJugador === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/partida.cantidadJugadores)*2))||
                    (sJugador === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                        colorNegro.style.opacity = 0.3; 
                    }else{
                        colorNegro.style.opacity = 1;  
                    }
                break;
                case 4:
                    //eliminacion de numeros para el lado vertical
                    const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id))
                    if((sJugador === "O" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sJugador === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sJugador === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho)))||
                    (sJugador === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                        colorNegro.style.opacity = 0.3; 
                    }else{
                        colorNegro.style.opacity = 1;  
                    }
                    break;
            }
        }else{
            colorNegro.style.opacity = 1;  
        }
    })
}

export const agregarPiezaEspecialClick = (sId) =>{
    //En este segmento detectamos si hay otra pieza en ese lugar
    let bVarible = false
    //Se busca si la posicion ya estaba siendo usada por otra unidad
    Object.keys(partida.posicionPiezasGlobal).forEach((col) => {
        if(partida.posicionPiezasGlobal[col] === sId){
            bVarible = true;
            return;
        }
    });

    if(bVarible){
        alert('Ya se encuentra una pieza en esta posición');
        return;
    }

    //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
    if(validaPosicionPieza(sAgregarPiezaEspecial.replace(/\s/g, '').substring(1,sAgregarPiezaEspecial.length ),sId)){
        return
    }
    posicionPiezasGlobal[sJugador+sAgregarPiezaEspecial] = sId;
    sAgregarPiezaEspecial = ""
    pintarMapaOpacity(false)
    evaluartTurnoJugador();
}

const validaPosicionPieza = (sPieza,sPosicion) =>{
    const nValor = eliminarLetras(sPosicion)

    //Evaluaremos si la pieza esta invadiendo terreno

    switch (partida.cantidadJugadores){
        case 3:
            if((sJugador === "O" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
            (sJugador === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/partida.cantidadJugadores)*2))||
            (sJugador === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                alert('Esta pieza esta invadiendo terreno')
                return true; 
            }
        break;
        case 4:
            //eliminacion de numeros para el lado vertical
            const nValorCol = alfabetoANumero(eliminarNumeros(sPosicion))
            if((sJugador === "O" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                (sJugador === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                (sJugador === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho)))||
                (sJugador === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                alert('Esta pieza esta invadiendo terreno')
                return true; 
            }
    }

    if((eliminarNumeros(sPieza) === "caballero" || eliminarNumeros(sPieza) === "castillo") && lagos.includes(sPosicion)){
        alert('Esta pieza no puede invadir un lago');
        return true;
    }
    if(montanas.includes(sPosicion)){
        alert('Esta pieza no puede invadir una montaña');
        return true;
    }

}

export const getColorPorLetra = (sLetra) => {
    //detectamos que jugador gano
    switch(sLetra){
        case "O":
            return 'Naranjas'
        case "B":
            return 'Negros'
        case "R":
            return 'Rojos'
        case "P":
            return 'Morados'
        default:
            return "";
    }
}