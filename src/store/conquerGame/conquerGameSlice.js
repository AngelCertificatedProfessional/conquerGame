//conquerGame
import { createSlice } from '@reduxjs/toolkit';
import { ESTRUCTURACREARPARTIDA } from '../../types';

export const conquerGameSlice = createSlice({
    name: 'conquerGame',
    initialState: {
        mostrarVentana: 0,
        partida: { ...ESTRUCTURACREARPARTIDA },
        // conquerGame: { ...ESTRUCTURACONQUERGAME },
        conquerGame: {},
        partidas: []
    },
    reducers: {
        actualizarConquerGame: (state, { payload }) => {
            state.conquerGame = { ...state.conquerGame, ...payload };
        },
        reiniciarValoresConquerGame: (state) => {
            // state.conquerGame = { ...ESTRUCTURACONQUERGAME }
            state.conquerGame = {}
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
        cargarPiezas: (state, { payload }) => {
            state.conquerGame.piezas = payload;
        },
        actualizarVentana: (state, { payload }) => {
            state.mostrarVentana = payload
        },
    }
});
export const {
    actualizarConquerGame,
    actualizarPartida,
    actualizarVentana,
    cargarPartidas,
    reiniciarPartida,
    reiniciarValoresConquerGame,
    cargarPiezas
} = conquerGameSlice.actions;