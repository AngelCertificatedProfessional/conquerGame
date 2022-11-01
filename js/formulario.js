import {montanas,lagos} from './config/configuracionTablero.js'
import { colorLago, colorMontana, colorSeleccionado, colorTablero, eliminarLetras, eliminarNumeros, numeroAAlfabeto, tamanoTableroAncho, tamanoTableroLargo } from './util/configuracionGeneral.js';

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
    
            if(hathiTest.style.backgroundColor === 'rgb(72, 66, 65)'){
                hathiTest.style.backgroundColor = 'rgb(255, 255, 255)'; 
                piezaSeleccionada = null;
            }else{
                hathiTest.style.backgroundColor = 'rgb(72, 66, 65)';
                piezaSeleccionada = hathiTest;
            }

            //Detectamos que si la pieza ya fue puesta la marcamos para no confundir al usuario
            let nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
            if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorSeleccionado;
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
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorMontana;
        const nValor = eliminarLetras(colorNegro.id)
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorLago; 
        const nValor = eliminarLetras(colorNegro.id)
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
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
            sTurno = "B";
            document.getElementById('tog').innerText = "Black's Turn"
            coloring();
            eliminarImagenesListado()
            agregarImagenesListado()
            break;
        case "B":
            window.localStorage.setItem('piezas', JSON.stringify(piezasGame))
            window.open("http://127.0.0.1:5501/juego.html","_self")
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
    if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
        alert('Esta pieza esta invadiendo terreno')
        return true;
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
        if(sPiezaAColocar === ''){
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

