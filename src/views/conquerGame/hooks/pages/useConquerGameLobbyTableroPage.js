import { useCallback, useEffect, useRef, useState } from "react";
import { useConquerGameStore, useSocket } from "../../../../hooks"
import { piezaInvadePosicionConfiguracion } from "../../../../helpers/conquerGame/validaPosicionPieza";
import { getEnvVariables } from "../../../../helpers";
import { useNavigate } from 'react-router-dom';

const drawerWidth = '200px';
export const useConquerGameLobbyTableroPage = () => {
    const { VITE_SOCKET_URL } = getEnvVariables()
    const { conquerGame, inicializarPiezasJugador,
        indicarJugadorListo, startActualizarConquerGame } = useConquerGameStore();
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const [piezasJugador, setPiezasJugador] = useState([])
    const [habilitarOpcionAceptar, setHabilitarOpcionAceptar] = useState(false)
    const [bloquearOpciones, setBloquearOpciones] = useState(false)
    const { socket, conectarSocket } = useSocket(VITE_SOCKET_URL)
    const refsPiezas = useRef({});
    const refsCuadro = useRef({});
    const navigate = useNavigate();

    useEffect(() => {
        setPiezasJugador(conquerGame.piezas)
    }, [conquerGame])

    useEffect(() => {
        inicializarPiezasJugador()
    }, [])


    useEffect(() => {
        conectarSocket()
    }, [conectarSocket])

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

    const setCuadroRef = useCallback((node, posicion) => {
        if (node) {
            refsCuadro.current[posicion] = node;
        }
    }, []);



    const handleClickPersonaje = (pieza) => {
        if (!!bloquearOpciones) return
        if (!!piezaSeleccionada && piezaSeleccionada.nombre === pieza.nombre) {
            setPiezaSeleccionada(null)
            const ref = refsPiezas.current[pieza.nombre];
            if (ref) {
                ref.style.backgroundColor = "rgba(255, 255, 255, 1)";
            }
            return
        }

        if (!!piezaSeleccionada) {
            const ref = refsPiezas.current[piezaSeleccionada.nombre];
            if (ref) {
                ref.style.backgroundColor = "rgba(255, 255, 255, 1)";
            }
        }
        setPiezaSeleccionada(pieza)
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = "rgba(225, 234, 57, 0.65)";
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (!!bloquearOpciones) return
        if (!!!piezaSeleccionada) return
        let posicionVieja = null;

        if (piezaInvadePosicionConfiguracion(posicionPieza, piezaSeleccionada.nombre,
            conquerGame, piezasJugador)) return

        const nuevaPiezaJugador = piezasJugador.map((pieza) => {
            if (!!!posicionVieja && pieza.nombre === piezaSeleccionada.nombre && pieza.posicion !== '') {
                posicionVieja = pieza.posicion
            }
            return {
                ...pieza,
                posicion: pieza.nombre === piezaSeleccionada.nombre ? posicionPieza : pieza.posicion
            };
        })
        setPiezasJugador(nuevaPiezaJugador)
        if (!!posicionVieja) {
            const ref = refsCuadro.current[posicionVieja];
            if (ref) {
                ref.innerHTML = '';
            }
        }

        const ref = refsCuadro.current[posicionPieza];
        if (ref) {
            const pieza = nuevaPiezaJugador.find(p => p.posicion === posicionPieza);
            ref.innerHTML = pieza ? `<img src="${pieza.direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        }

        setHabilitarOpcionAceptar(nuevaPiezaJugador.every((valor) => valor.posicion !== ''))
    }

    const aceptarPartida = () => {
        indicarJugadorListo(piezasJugador)
        setHabilitarOpcionAceptar(false)
        setBloquearOpciones(true)
    }

    return {
        conquerGame,
        drawerWidth,
        piezasJugador,
        habilitarOpcionAceptar,
        handleClickTablero,
        handleClickPersonaje,
        setListadoRef,
        setCuadroRef,
        aceptarPartida
    }
}
