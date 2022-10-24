import { lagos, montanas } from "../config/configuracionTablero.js";
export let colorOpciones = 'rgb(195, 208, 39)';
export let colorDisparoArcher = 'rgb(223, 55, 19)';
export let colorMontana = 'rgb(14, 155, 0)';
export let colorLago = 'rgb(63, 234, 229)';

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