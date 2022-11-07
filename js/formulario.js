import {montanas,lagos} from './config/configuracionTablero.js'
import { alfabetoANumero, cantidadJugadores, colorLago, colorMontana, colorSeleccionado, colorTablero, eliminarLetras, eliminarNumeros, numeroAAlfabeto, tamanoTableroAncho, tamanoTableroLargo } from './util/configuracionGeneral.js';

let sTurno = 'W';
let sPiezaAColocar = ''
let piezaSeleccionada = null;

let arregloPiezas = [{
    nombre:"hachero1",
    posicion:"",
    icono:"hachero",
},{
    nombre:"hachero2",
    posicion:"",
    icono:"hachero",
},
{
    nombre:"lancero1",
    posicion:"",
    icono:"lancero",
},
{
    nombre:"lancero2",
    posicion:"",
    icono:"lancero",
},
{
    nombre:"lancero3",
    posicion:"",
    icono:"lancero",
},
{
    nombre:"lancero4",
    posicion:"",
    icono:"lancero",
},
{
    nombre:"archer",
    posicion:"",
    icono:"archer",
},
{
    nombre:"asesino",
    posicion:"",
    icono:"asesino",
},
{
    nombre:"caballero1",
    posicion:"",
    icono:"caballero",
},
{
    nombre:"caballero2",
    posicion:"",
    icono:"caballero",
},
{
    nombre:"caballero3",
    posicion:"",
    icono:"caballero",
},
{
    nombre:"caballero4",
    posicion:"",
    icono:"caballero",
},
{
    nombre:"rey",
    posicion:"",
    icono:"rey",
},
]

const piezasGame = {};

const agregarImagenesListado = () => {
    for ( const piecePosition in arregloPiezas ) {  
        let divElement = document.createElement("div");
        divElement.className = 'iconoMenu'
        divElement.id = arregloPiezas[piecePosition].nombre
        divElement.innerHTML = sTurno+arregloPiezas[piecePosition].nombre+`<img class='allimg' src="img/${sTurno+arregloPiezas[piecePosition].icono}.png" alt="">`
        divElement.style.cursor = 'pointer'
        document.getElementById("lista_personajes").appendChild(divElement);
    }
    //Se pone dentro de esta seccion porque es necesario que cuando se vuelva a cargar el listado las imagenes
    //esten visibles.
    document.querySelectorAll('.iconoMenu').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            //guardamos la pieza
            sPiezaAColocar = hathiTest.innerText;
            console.log(hathiTest.innerText)

            //Segmento para deselecconar las opciones tanto del tablero como del listado
            if(piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id){
                piezaSeleccionada.style.backgroundColor = 'rgb(255, 255, 255)';
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===piezaSeleccionada.innerText.replace(/\s/g, '').substring(1,piezaSeleccionada.innerText.length));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    if(lagos.includes(arregloPiezas[nValor].posicion)){
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
                    }else{
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
                    }
                }
                piezaSeleccionada = null;
            }
            //pintar el seleccionado normal o gris sobre la misma pieza
            if(hathiTest.style.backgroundColor === 'rgb(72, 66, 65)'){
                hathiTest.style.backgroundColor = 'rgb(255, 255, 255)'; 
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===piezaSeleccionada.innerText.replace(/\s/g, '').substring(1,piezaSeleccionada.innerText.length));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    if(lagos.includes(arregloPiezas[nValor].posicion)){
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
                    }else{
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
                    }
                }
                piezaSeleccionada = null;
            }else{
                hathiTest.style.backgroundColor = 'rgb(72, 66, 65)';
                piezaSeleccionada = hathiTest;
                //Detectamos que si la pieza ya fue puesta la marcamos para no confundir al usuario
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    console.log('entre a seleccionar');
                    document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorSeleccionado;
                }
            }

            
        })
    })

}
agregarImagenesListado();

const agregarDivsTablero = () => {
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
}
agregarDivsTablero();

function coloring() {
    document.querySelectorAll('.white-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorTablero; 
        const nValor = eliminarLetras(colorNegro.id)
        switch (cantidadJugadores){
            case 2:
                if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
                (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
            case 3:
                if((sTurno === "W" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
                (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/cantidadJugadores)*2))||
                (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
            break;
            case 4:
                console.log(eliminarLetras(colorNegro.id))
                console.log(eliminarNumeros(colorNegro.id))
                console.log(alfabetoANumero(eliminarNumeros(colorNegro.id)))
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id))
                if((sTurno === "W" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sTurno === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) ||
                    (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
        }
        
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorMontana;
        const nValor = eliminarLetras(colorNegro.id)
        switch (cantidadJugadores){
            case 2:
                if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
                (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
            case 3:
                if((sTurno === "W" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
                (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/cantidadJugadores)*2))||
                (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }    
            break;
            case 4:
                console.log(eliminarLetras(colorNegro.id))
                console.log(eliminarNumeros(colorNegro.id))
                console.log(alfabetoANumero(eliminarNumeros(colorNegro.id)))
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id))
                if((sTurno === "W" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sTurno === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) ||
                    (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
        }
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorLago; 
        const nValor = eliminarLetras(colorNegro.id)
        switch (cantidadJugadores){
            case 2:
                if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
                (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
            break;
            case 3:
                if((sTurno === "W" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
                (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/cantidadJugadores)*2))||
                (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
            break;
            case 4:
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id))
                if((sTurno === "W" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                        colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
        }
    })
}
coloring()

const eliminarImagenesListado = () => {
    document.getElementById("lista_personajes").innerHTML = '';
}

export const guardarConfiguracionPiezas = () => {
    //Validamos que no halla piezas vacias
    for ( const piecePosition in arregloPiezas ) {  
        if(arregloPiezas[piecePosition].posicion === ""){
            alert("Debe agregar todas las piezas al tablero primero")
            return;
        }
    }
    //agregamos la informaicon a un arreglo para poderlo limpar la info despues
    for ( const piecePosition in arregloPiezas ) {  
        piezasGame[sTurno+arregloPiezas[piecePosition].nombre] = arregloPiezas[piecePosition].posicion;
        document.getElementById(arregloPiezas[piecePosition].posicion).innerHTML = '';
        arregloPiezas[piecePosition].posicion = '';
    }
    sPiezaAColocar = ''
    switch(sTurno){
        case "W":
            cargarJugador("B","Black's Turn")
            break;
        case "B":
            if(cantidadJugadores === 2){
                window.localStorage.setItem('piezas', JSON.stringify(piezasGame))
                window.open("http://127.0.0.1:5501/juego.html","_self")
            }else{
                cargarJugador("R","Red's Turn")
            }
        break;
        case "R":
            if(cantidadJugadores === 3){
                window.localStorage.setItem('piezas', JSON.stringify(piezasGame))
                window.open("http://127.0.0.1:5501/juego.html","_self")
            }else{
                cargarJugador("P","Purple's Turn")
            }
        break;
        case "P":
            if(cantidadJugadores === 4){
                window.localStorage.setItem('piezas', JSON.stringify(piezasGame))
                window.open("http://127.0.0.1:5501/juego.html","_self")
            }
        break;
    }
}


const insertImage = () => {
    document.querySelectorAll('.box').forEach(image => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            if(image.innerText.replace(/\s/g, '') !== 'Montana' && image.innerText.replace(/\s/g, '') !== 'Lago'){
                image.innerHTML = `${image.innerText} <img class='allimg' src="img/${eliminarNumeros(image.innerText)}.png" alt="">`
            }
        }
    })
}

//Este metodo evalua si la pieza la estan poniendo en cesped rio o esta invadiendo terreno
const validaPosicionPieza = (sPieza,sPosicion) =>{
    const nValor = eliminarLetras(sPosicion)

    //Evaluaremos si la pieza esta invadiendo terreno

    switch (cantidadJugadores){
        case 2:
            if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
            (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                alert('Esta pieza esta invadiendo terreno')
                return true;
            }
            break;
        case 3:
            if((sTurno === "W" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
            (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/cantidadJugadores)*2))||
            (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    alert('Esta pieza esta invadiendo terreno')
                    return true; 
            }
        break;
        case 4:
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(sPosicion))
                if((sTurno === "W" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sTurno === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho)))||
                    (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                        alert('Esta pieza esta invadiendo terreno')
                    return true; 
                }
    }



    if((sPieza === "caballero1"||sPieza === "caballero2"||sPieza === "caballero3"||
        sPieza === "caballero4" )&& lagos.includes(sPosicion)){
        alert('Esta pieza no puede invadir un lago');
        return true;
    }
    if(montanas.includes(sPosicion)){
        alert('Esta pieza no puede invadir una montana');
        return true;
    }
}


// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        if(sPiezaAColocar === '' || piezaSeleccionada === '' || piezaSeleccionada === null){
            return
        }
        
        //En este segmento detectamos si hay otra pieza en ese lugar
        let nValor = arregloPiezas.findIndex(obj => obj.posicion===hathiTest.id);
        if(nValor !== -1){
            alert('Ya se enceuntra una pieza en esta posicion');
            return
        }
        
        //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
        if(validaPosicionPieza(sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ),hathiTest.id)){
            return
        }

        //En este segmento detectaremos que si la pieza ya fue colocada, esta se eliminara del mapa para ponerla de nuevo
        nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
        if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
            document.getElementById(arregloPiezas[nValor].posicion).innerHTML = '';
            if(lagos.includes(arregloPiezas[nValor].posicion)){
                document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
            }else{
                document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
            }
        }

        hathiTest.style.backgroundColor = colorSeleccionado
        //agrega el escrito de la pieza a color
        hathiTest.innerHTML = sPiezaAColocar
        //se le asigna la nueva posicion
        arregloPiezas[nValor].posicion = hathiTest.id;

        insertImage();
    })
})

const cargarJugador = (sTurnoT,sTexto) => {
    sTurno = sTurnoT;
    document.getElementById('tog').innerText = sTexto
    coloring();
    eliminarImagenesListado()
    agregarImagenesListado()
}