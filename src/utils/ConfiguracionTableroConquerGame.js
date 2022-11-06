export const colorTablero = 'rgb(240, 201, 150)'
export const colorMontana = 'rgb(14, 155, 0)';
export const colorLago = 'rgb(63, 234, 229)';
export const colorOpciones = 'rgb(195, 208, 39)';
export const colorDisparoArcher = 'rgb(223, 55, 19)';
export const colorSeleccionado = 'rgb(213, 92, 209)';
export const colorCasstilloEntrada= 'rgb(185, 185, 179)';
export const colorCasstilloSala= 'rgb(94, 94, 89)';
export const tamanoTableroLargo = 24
export const tamanoTableroAncho = 24
export const cantidadJugadores = 3
export const arregloJugadores = ['W','B','R','B','G','Y']


export const validaPiezaMontana = (idDiv) => {
    if(montanas.includes(idDiv)){
        return true;
    }
    return false;
}

export const validaPiezaLago = (idDiv) => {
    if(lagos.includes(idDiv)){
        return true;
    }
    return false;
}

export const montanas = [
    "1F",
    "1G",
    "2V",
    "2W",
    "5L",
    "5M",
    "5P",
    "6M",
    "6P",
    "6R",
    "6S",
    "6T",
    "6D",
    "6E",
    "6F",
    "6G",
    "7Q",
    "8P",
    "8Q",
    "8T",
    "11U",
    "11V",
    "10V",
    "10W",
    "5B",
    "4E",
    "7F",
    "8F",
    "8G",
    "11C",
    "11D",
    "11H",
    "11I",
    "10I",
    "13G",
    "18G",
    "19G",
    "19F",
    "17F",
    "16F",
    "16E",
    "19A",
    "19B",
    "21E",
    "21F",
    "22F",
    "23K",
    "17H",
    "16J",
    "16K",
    "17K",
    "13N",
    "13O",
    "17N",
    "16N",
    "21R",
    "23W",
    "19U",
    "23O",
    "22O",
    "20P",
    "20Q",
    "19P",
    "18Q",
    "17R",
    "21Q",
    "22R",
    "23T"
]

export const lagos = [
    "4B",
    "5F",
    "8H",
    "11G",
    "13F",
    "18F",
    "22E",
    "20A",
    "18U",
    "16X",
    "18R",
    "23S",
    "4U",
    "5V",
    "6O",
    "11T"
]