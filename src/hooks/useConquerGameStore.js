//conquerGame
import { useDispatch, useSelector } from 'react-redux'
import { conquerGameApi } from '../api';
import {
    actualizarConquerGame,
    actualizarVentana,
    cargarPartidas,
    reiniciarPartida
} from '../store';
import { useUiStore } from './useUiStore';
import { detectarError } from '../helpers';
import { alertError, alertMensaje } from '../plugins';
import { useNavigate } from 'react-router-dom';
export const useConquerGameStore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { closeDialog, startCargando, startMensajeError } = useUiStore();
    const { conquerGame, partida, partidas, mostrarVentana } = useSelector(state => state.conquerGame);

    const agregarPartida = async ({
        tipoJuego,
        cantidadJugadores
    }) => {
        try {
            startCargando(true);
            const { data } = await conquerGameApi.post('/conquerGame/crearPartida', {
                tipoJuego,
                cantidadJugadores
            });
            alertMensaje("Guardado", 'Partida Generada', "success");
            dispatch(reiniciarPartida());
            dispatch(actualizarConquerGame(data.data))
            cerrarVentana();
            navigate("/conquerGame/conquerGameLobby");
        } catch (error) {
            const erroresSinArreglo = detectarError(error);
            startMensajeError(erroresSinArreglo);
            alertError('Error al guardar', erroresSinArreglo)
            startCargando(false);
        }
    };
    //Metodo para obtener el listados de las partidas y mostrarlas en la tabla
    const buscarPartidas = async () => {
        try {
            startCargando(true);
            const { data } = await conquerGameApi.get('/conquerGame/buscarPartidas');
            dispatch(cargarPartidas(data.data));
            startCargando(false);
        } catch (error) {
            startMensajeError(detectarError(error));
            startCargando(false);
        }
    };

    //Metodo utilizado para poder ingresar a las partidas, desde el listado
    const ingresarLobbyPartida = async (conquerGame_id) => {
        try {
            startCargando(true);
            const { data } = await conquerGameApi.patch(`/conquerGame/ingresarLobbyPartida/${conquerGame_id}`);
            startCargando(false);
            dispatch(reiniciarPartida());
            startActualizarConquerGame(data.data)
            cerrarVentana();
            navigate("/conquerGame/conquerGameLobby");
        } catch (error) {
            startMensajeError(detectarError(error));
            startCargando(false);
        }
    };

    const startActualizarConquerGame = async (conquerGameP) => {
        dispatch(actualizarConquerGame(conquerGameP))
    }
    //Al momento que el usuario da ingresar
    const mostrarTableroSeleccion = async () => {
        startCargando(true);
        await conquerGameApi.patch(`/conquerGame/ingresarSeleccionPersonaje/${conquerGame.id}`);
        startCargando(false);
        cerrarVentana();
    }

    const indicarJugadorListo = async (piezasJugador) => {
        startCargando(true);
        await conquerGameApi.patch(`/conquerGame/indicarJugadorListo/${conquerGame.id}`, {
            piezasJugador
        });
        startCargando(false);
        cerrarVentana();
    }

    const iniciarPartida = async () => {
        startCargando(true);
        await conquerGameApi.patch(`/conquerGame/iniciarPartida/${conquerGame.id}`);
        startCargando(false);
        cerrarVentana();
    }

    const moverPosicionPiezasGlobal = async (posicionPiezasGlobal, siguienteTurno, reyesVivos) => {
        startCargando(true);
        await conquerGameApi.patch(`/conquerGame/moverPosicionPiezasGlobal/${conquerGame.id}`, {
            posicionPiezasGlobal,
            siguienteTurno,
            reyesVivos
        });
        startCargando(false);
        cerrarVentana();
    }

    const startMostrarVentana = (nVentana) => {
        dispatch(actualizarVentana(nVentana))
    }

    const cerrarVentana = () => {
        closeDialog();
        startMensajeError('');
        setTimeout(function () {
            startCargando(false);
        }, 300);
    };

    return {
        partida,
        partidas,
        mostrarVentana,
        conquerGame,
        //Metodos
        agregarPartida,
        startMostrarVentana,
        buscarPartidas,
        ingresarLobbyPartida,
        startActualizarConquerGame,
        mostrarTableroSeleccion,
        indicarJugadorListo,
        iniciarPartida,
        moverPosicionPiezasGlobal
    };
};