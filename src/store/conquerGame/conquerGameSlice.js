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
        conquerGames: [],
        partidas: []
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
        cargarPartidas: (state, { payload = [] }) => {
            state.partidas = payload;
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
    actualizarConquerGame,
    actualizarPartida,
    actualizarVentana ,
    cargarConquerGames,
    cargarPartidas,
    reiniciarPartida,
    reiniciarValoresConquerGame,
} = conquerGameSlice.actions;