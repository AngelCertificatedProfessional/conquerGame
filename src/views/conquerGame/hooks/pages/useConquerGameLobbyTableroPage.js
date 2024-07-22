import { useCallback, useEffect, useRef, useState } from "react";
import { useConquerGameStore, useSocket } from "../../../../hooks"
import {
    piezaInvadePosicionConfiguracion,
    posicionesMovimientosPiezas
} from "../../../../helpers/conquerGame/validaPosicionPieza";
import { useNavigate } from 'react-router-dom';
import { inicializarPiezasJugador } from "../../../../helpers/conquerGame/inicializarPiezasJugador";
import { COLORMOVIMIENTODESSELECCION, COLORMOVIMIENTOSELECCION } from "../../../../types";

const drawerWidth = '200px';
export const useConquerGameLobbyTableroPage = () => {
    const { conquerGame,
        indicarJugadorListo, startActualizarConquerGame } = useConquerGameStore();
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const [piezasJugador, setPiezasJugador] = useState([])
    const [posicionesPiezaMoverse, setPosicionesPiezaMoverse] = useState([])
    const [posicionesPiezaDisparar, setPosicionesPiezaDisparar] = useState([])
    const [posicionPiezaSeleccionada, setPosicionPiezaSeleccionada] = useState('')
    const [habilitarOpcionAceptar, setHabilitarOpcionAceptar] = useState(false)
    const [bloquearOpciones, setBloquearOpciones] = useState(false)
    const { socket } = useSocket()
    const refsPiezas = useRef({});
    const navigate = useNavigate();
    const cargarPiezasJugador = async () => {
        const piezas = await inicializarPiezasJugador(conquerGame)
        setPiezasJugador(piezas)
    }

    useEffect(() => {
        cargarPiezasJugador()
    }, [])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}IndicarJugadorListo`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
        })
    }, [socket])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}IniciarPartida`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
            navigate("/conquerGame/conquerGameJuegoTableroPage")
        })
    }, [socket])

    const setListadoRef = useCallback((node, posicion) => {
        if (node) {
            refsPiezas.current[posicion] = node;
        }
    }, []);

    const handleClickPersonaje = (pieza) => {
        if (!!bloquearOpciones) return

        if (!!piezaSeleccionada && piezaSeleccionada.nombre === pieza.nombre) {
            setPosicionesPiezaMoverse([])
            setPosicionesPiezaDisparar([])
            setPiezaSeleccionada(null)
            setPosicionPiezaSeleccionada("")
            const ref = refsPiezas.current[pieza.nombre];
            if (ref) {
                ref.style.backgroundColor = COLORMOVIMIENTODESSELECCION;
            }
            return
        }

        if (!!piezaSeleccionada) {
            const ref = refsPiezas.current[piezaSeleccionada.nombre];
            if (ref) {
                ref.style.backgroundColor = COLORMOVIMIENTODESSELECCION;
            }
        }
        setPiezaSeleccionada(pieza)
        const { posicion } = piezasJugador.find(({ nombre }) => nombre === pieza.nombre)
        evaluarPosiciones(!!posicion ? posicion : '', piezasJugador, pieza)
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = COLORMOVIMIENTOSELECCION;
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (!!bloquearOpciones) return
        if (!!!piezaSeleccionada) return
        if (piezaInvadePosicionConfiguracion(posicionPieza, piezaSeleccionada.nombre, piezasJugador)) return
        //Agregamos las posiciones al nuevo arreglo
        const nuevaPiezaJugador = piezasJugador.map((pieza) => {
            return {
                ...pieza,
                posicion: pieza.nombre === piezaSeleccionada.nombre ? posicionPieza : pieza.posicion
            };
        })
        setPiezasJugador(nuevaPiezaJugador)
        setHabilitarOpcionAceptar(nuevaPiezaJugador.every((valor) => valor.posicion !== ''))
        evaluarPosiciones(posicionPieza, nuevaPiezaJugador, piezaSeleccionada)
    }

    const evaluarPosiciones = (posicionPieza, piezaJugador, piezaSeleccionada) => {
        const [posicionesPiezaMoverseT, posicionesPiezaDisparar] =
            posicionesMovimientosPiezas(piezaSeleccionada.icono, posicionPieza,
                piezaJugador, conquerGame.turnoJugador)

        setPosicionesPiezaMoverse(posicionesPiezaMoverseT)
        setPosicionesPiezaDisparar(posicionesPiezaDisparar)
        setPosicionPiezaSeleccionada(posicionPieza)
    }

    const aceptarPartida = () => {
        handleClickPersonaje(piezaSeleccionada)
        indicarJugadorListo(piezasJugador)
        setHabilitarOpcionAceptar(false)
        setBloquearOpciones(true)
    }

    return {
        conquerGame,
        drawerWidth,
        piezasJugador,
        habilitarOpcionAceptar,
        posicionesPiezaMoverse,
        posicionesPiezaDisparar,
        posicionPiezaSeleccionada,
        handleClickTablero,
        handleClickPersonaje,
        setListadoRef,
        aceptarPartida,
    }
}
