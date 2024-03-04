//conquerGame
import { createSlice } from '@reduxjs/toolkit';
import { ESTRUCTURACREARPARTIDA } from '../../types';

export const conquerGameSlice = createSlice({
    name: 'conquerGame',
    initialState: {
        mostrarVentana:0,
        partida: { ...ESTRUCTURACREARPARTIDA },
        // conquerGame: { ...ESTRUCTURACONQUERGAME },
        conquerGame: {  },
        conquerGames: []
    },
    reducers: {
        actualizarConquerGame: (state, { payload }) => {
            state.conquerGame = payload;
        },
        cargarConquerGames: (state, { payload = [] }) => {
            state.conquerGames = payload;
        },
        reiniciarValoresConquerGame: (state) => {
            // state.conquerGame = { ...ESTRUCTURACONQUERGAME }
            state.conquerGame = { }
        },
        actualizarPartida: (state, { payload }) => {
            state.partida = payload;
        },
        reiniciarPartida: (state) => {
            state.partida = { ...ESTRUCTURACREARPARTIDA }
        },
        actualizarVentana: (state,{payload}) => {
            state.mostrarVentana = payload
        },
    }
});
export const {
    partida,
    actualizarConquerGame,
    cargarConquerGames,
    reiniciarValoresConquerGame,
    actualizarPartida,
    reiniciarPartida,
    actualizarVentana 
} = conquerGameSlice.actions;