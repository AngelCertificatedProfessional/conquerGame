//conquerGame
import { useDispatch, useSelector } from 'react-redux'
import { conquerGameApi } from '../api';
import {
    actualizarConquerGame, actualizarVentana,
    cargarPartidas,
    cargarPiezas,
    reiniciarPartida
} from '../store';
import { useUiStore } from './useUiStore';
import { detectarError } from '../helpers';
import { alertError, alertMensaje } from '../plugins';
import { useNavigate } from 'react-router-dom';
import { useUsuarioStore } from './useUsuarioStore';
import { ESTRUCTURAPIEZAS } from '../types';
export const useConquerGameStore = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { closeDialog, startCargando, startMensajeError } = useUiStore();
    const { user } = useUsuarioStore();
    const { conquerGame, conquerGames, partida, partidas, mostrarVentana } = useSelector(state => state.conquerGame);

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
            alertMensaje("Guardado", 'ConquerGame Guardado', "success");
            dispatch(reiniciarPartida());
            data.data.turno = data.turnoJugador;
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
    const ingresarPartida = async (conquerGame_id) => {
        try {
            startCargando(true);
            const { data } = await conquerGameApi.patch(`/conquerGame/ingresarPartida/${conquerGame_id}`);
            startCargando(false);
            dispatch(reiniciarPartida());
            data.data.turno = data.turnoJugador;
            startActualizarConquerGame(data.data)
            cerrarVentana();
            navigate("/conquerGame/conquerGameLobby");
        } catch (error) {
            startMensajeError(detectarError(error));
            startCargando(false);
        }
    };

    const startActualizarConquerGame = async (conquerGameP) => {
        //Evaluamos el jugador y le asignamos el turno correspondiente
        dispatch(actualizarConquerGame(conquerGameP))
    }
    //Al momento que el usuario da ingresar
    const mostrarTableroSeleccion = async () => {
        startCargando(true);
        await conquerGameApi.patch(`/conquerGame/ingresarSeleccionPersonaje/${conquerGame.id}`);
        startCargando(false);
        cerrarVentana();
    }

    const inicializarPiezasJugador = async () => {
        const piezas = await Promise.all(
            ESTRUCTURAPIEZAS.map(async (pieza) => {
                return {
                    ...pieza,
                    direccion: (await import(`../images/conquerGame/${conquerGame.turno}${pieza.icono}.png`)).default
                }
            }));
        dispatch(cargarPiezas(piezas))
    }

    //    const agregarConquerGame= async ({
    //        titulo,
    // //       fechaAsignacion,
    //     }) => {
    //        try {
    //            startCargando(true);
    //            await conquerGameApi.post('/conquerGame/agregar', {
    //                titulo,
    // //             fechaAsignacion: convertirFechaTOEpoch(fechaAsignacion),
    //            });
    //            alertMensaje("Guardado",'ConquerGame Guardado', "success");
    //            cerrarVentana();
    //            buscarConquerGames();
    //        } catch (error) {
    //            const erroresSinArreglo = detectarError(error);
    //            startMensajeError(erroresSinArreglo);
    //            alertError('Error al guardar', erroresSinArreglo)
    //            startCargando(false);
    //        }
    //    };

    //    const buscarConquerGames = async () => {
    //        try {
    //            startCargando(true);
    //            const { data } = await conquerGameApi.get('/conquerGame/listado');
    //            dispatch(cargarConquerGames(data.data));
    //            startCargando(false);
    //        } catch (error) {
    //            startMensajeError(detectarError(error));
    //            startCargando(false);
    //        }
    //    };

    //    const eliminarConquerGame = async (id) => {
    //     try {
    //            if (id.length <= 0) return;
    //             const resultado = await alertAdvertencia('Estas seguro de eliminar el conquerGame!')
    //            if (!resultado.isConfirmed) {
    //                return;
    //            }
    //            await conquerGameApi.delete(`/conquerGame/eliminar/${id}`);
    //            buscarConquerGames();
    //             alertMensaje('Eliminado', 'ConquerGame Eliminado', 'success');
    //        } catch (error) {
    //            const erroresSinArreglo = detectarError(error);
    //            startMensajeError(erroresSinArreglo);
    //            alertError('Error al eliminar', erroresSinArreglo)
    //        }
    //    };

    //    const buscarConquerGameById = async (id) => {
    //        try {
    //            if (id.length <= 0) return;
    //            startCargando(true);
    //            const { data } = await conquerGameApi.get(`/conquerGame/buscarById/${id}`);
    // //           data.data.fechaAsignacion = convertirFechaToDay(data.data.fechaAsignacion);
    //            dispatch(actualizarConquerGame(data.data));
    //            startCargando(false);
    //        } catch (error) {
    //            startMensajeError(detectarError(error));
    //        }
    //    };

    //    const modificarConquerGame = async ({
    //        id,
    //        titulo,
    // //       fechaAsignacion
    //  }) => {
    //        try {
    //            startCargando(true);
    //            await conquerGameApi.put('/conquerGame/modificar', {
    //                _id: id,
    //                titulo,
    // //             fechaAsignacion: convertirFechaTOEpoch(fechaAsignacion),
    //            });
    //            alertMensaje('Modificado', 'ConquerGame Modificado', 'success');
    //            cerrarVentana();
    //            buscarConquerGames();
    //        } catch (error) {
    //            const erroresSinArreglo = detectarError(error);
    //            startMensajeError(erroresSinArreglo);
    //            alertError('Error al Modificar', erroresSinArreglo);
    //            startCargando(false);
    //        }
    //    };

    const startMostrarVentana = (nVentana) => {
        dispatch(actualizarVentana(nVentana))
    }

    const cerrarVentana = () => {
        closeDialog();
        //    dispatch(reiniciarValoresConquerGame());
        startMensajeError('');
        setTimeout(function () {
            startCargando(false);
        }, 300);
    };

    return {
        //status,
        partida,
        partidas,
        mostrarVentana,
        conquerGame,
        //    conquerGames,
        //    //Metodos
        agregarPartida,
        startMostrarVentana,
        buscarPartidas,
        ingresarPartida,
        startActualizarConquerGame,
        mostrarTableroSeleccion,
        inicializarPiezasJugador
        //    agregarConquerGame,
        //    buscarConquerGames,
        //    buscarConquerGameById,
        //    eliminarConquerGame,
        //    modificarConquerGame,
        //    cerrarVentana
    };
};