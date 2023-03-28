import { reconvertirTextoAJson } from "../utils/UtileriasPagina";

export const imagenReducer = (initialState = [],action) => {
    return reconvertirTextoAJson(action.arrEstructuraPiezas).map( recurso => {recurso.direccion = (require(`@images/${action.turno + recurso.icono}.png`)); return recurso;}); 
}

export const objectReducer = (state, action) => {
    return action;
}