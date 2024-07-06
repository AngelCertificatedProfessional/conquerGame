import { useCallback, useEffect, useRef, useState } from "react";
import { useConquerGameStore, useSocket, useUsuarioStore } from "../../../../hooks"
import {
    piezaInvadePosicionConfiguracion,
    posicionesMovimientosPiezas,
    posicionesDispararPieza
} from "../../../../helpers/conquerGame/validaPosicionPieza";
import { getEnvVariables, numeroAAlfabeto } from "../../../../helpers";
import { useNavigate } from 'react-router-dom';
import { tamanoTableroX, tamanoTableroY } from "../../../../types";

const drawerWidth = '200px';
export const useConquerGameJuegoTableroPage = () => {
    const { VITE_SOCKET_URL } = getEnvVariables()
    const { conquerGame, indicarJugadorListo,
        startActualizarConquerGame, inicializarPiezasJugador,
        moverPosicionPiezasGlobal } = useConquerGameStore();
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const [piezasJugador, setPiezasJugador] = useState([])
    const [posicionesPiezaMoverse, setPosicionesPiezaMoverse] = useState([])
    const [posicionesPiezaDisparar, setPosicionesPiezaDisparar] = useState([])
    const [posicionPiezaSeleccionada, setPosicionPiezaSeleccionada] = useState('')
    const [habilitarOpcionAceptar, setHabilitarOpcionAceptar] = useState(false)
    const [bloquearOpciones, setBloquearOpciones] = useState(false)
    const { socket, conectarSocket } = useSocket(VITE_SOCKET_URL)
    const refsPiezas = useRef({});
    const refsCuadro = useRef({});
    const navigate = useNavigate();

    useEffect(() => {
        setPiezasJugador(conquerGame.piezas)
        actualizarRefPosicionPiezasGlobales()
    }, [conquerGame])

    useEffect(() => {
        inicializarPiezasJugador()
        actualizarRefPosicionPiezasGlobales()
    }, [])


    useEffect(() => {
        conectarSocket()
    }, [conectarSocket])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}MoverPosicionPiezasGlobal`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
            setBloquearOpciones(false)
        })
    }, [socket])

    //Eschucar los cambios en los usuarios conectados
    // useEffect(() => {
    //     socket?.on(`conquerGame${conquerGame.numeroPartida}IniciarPartida`, (conquerGameT) => {
    //         startActualizarConquerGame(conquerGameT)
    //         navigate("/conquerGame/conquerGameJuegoTableroPage")
    //     })
    // }, [socket])

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

    const actualizarRefPosicionPiezasGlobales = () => {
        console.log("entre")
        for (let row = 0; row < tamanoTableroX; row++) {
            for (let col = 0; col < tamanoTableroY; col++) {
                const posicion = `${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`;
                const pieza = conquerGame.posicionPiezasGlobal.find((ppg) => ppg.posicion === posicion)
                const ref = refsCuadro.current[posicion];
                ref.innerHTML = !!pieza ? `<img src="${pieza.direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
            }
        }
        console.log("finalize")
        // for (let nPosicion = 0; nPosicion < conquerGame.posicionPiezasGlobal.length; nPosicion++) {
        //     const ref = refsCuadro.current[conquerGame.posicionPiezasGlobal[nPosicion].posicion];
        //     const { direccion } = conquerGame.posicionPiezasGlobal[nPosicion];
        //     if (ref) {
        //         ref.innerHTML = direccion ? `<img src="${direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        //     }
        // }

        // for (let nPosicion = 0; nPosicion < conquerGame.posicionPiezasGlobal.length; nPosicion++) {
        //     if (conquerGame.posicionPiezasGlobal[nPosicion].posicion !== '') continue
        //     const ref = refsCuadro.current[conquerGame.posicionPiezasGlobal[nPosicion].posicion];
        //     const { direccion } = conquerGame.posicionPiezasGlobal[nPosicion];
        //     if (ref) {
        //         ref.innerHTML = direccion ? `<img src="${direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        //     }
        // }

        // for (let nPosicion = 0; nPosicion < conquerGame.posicionPiezasGlobal.length; nPosicion++) {
        //     if (conquerGame.posicionPiezasGlobal[nPosicion].posicion === '') continue
        //     const ref = refsCuadro.current[conquerGame.posicionPiezasGlobal[nPosicion].posicion];
        //     const { direccion } = conquerGame.posicionPiezasGlobal[nPosicion];
        //     if (ref) {
        //         ref.innerHTML = direccion ? `<img src="${direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        //     }
        // }

        if (!!piezaSeleccionada) limpiarPiezaSeleccionada(piezaSeleccionada)
    }

    const handleClickPersonaje = (pieza) => {
        if (!!bloquearOpciones) return
        if (conquerGame.turno !== conquerGame.turnoJugador) return
        if (!!piezaSeleccionada && piezaSeleccionada.nombre === pieza.nombre) {
            limpiarPiezaSeleccionada(pieza)
            return
        }

        if (!!piezaSeleccionada) {
            const ref = refsPiezas.current[piezaSeleccionada.nombre];
            if (ref) {
                ref.style.backgroundColor = "rgba(255, 255, 255, 1)";
            }
        }
        setPiezaSeleccionada(pieza)
        const { posicion } = conquerGame.posicionPiezasGlobal.find(({ nombre }) => nombre === pieza.nombre)
        evaluarPosiciones(!!posicion ? posicion : '', conquerGame.posicionPiezasGlobal, pieza)
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = "rgba(225, 234, 57, 0.65)";
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (!!bloquearOpciones) return
        if (!!!piezaSeleccionada) return

        if (!posicionesPiezaMoverse.includes(posicionPieza)) return


        //Agregamos las posiciones al nuevo arreglo
        // let posicionVieja = null;
        const nuevaPiezaJugador = conquerGame.posicionPiezasGlobal.map((pieza) => {
            // if (!!!posicionVieja && pieza.nombre === piezaSeleccionada.nombre && pieza.posicion !== '') {
            //     posicionVieja = pieza.posicion
            // }
            return {
                ...pieza,
                posicion: pieza.nombre === piezaSeleccionada.nombre ? posicionPieza : pieza.posicion
            };
        })

        moverPosicionPiezasGlobal(nuevaPiezaJugador)
        setBloquearOpciones(true)
        // console.log(nuevaPiezaJugador)
        // setPiezasJugador(nuevaPiezaJugador)
        // if (!!posicionVieja) {
        //     const ref = refsCuadro.current[posicionVieja];
        //     if (ref) {
        //         ref.innerHTML = '';
        //     }
        // }

        // const ref = refsCuadro.current[posicionPieza];
        // if (ref) {
        //     const pieza = nuevaPiezaJugador.find(p => p.posicion === posicionPieza);
        //     ref.innerHTML = pieza ? `<img src="${pieza.direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        // }

        // setHabilitarOpcionAceptar(nuevaPiezaJugador.every((valor) => valor.posicion !== ''))
        // evaluarPosiciones(posicionPieza, nuevaPiezaJugador, piezaSeleccionada)
    }

    const evaluarPosiciones = (posicionPieza, piezaJugador, piezaSeleccionada) => {
        setPosicionesPiezaMoverse(posicionesMovimientosPiezas(piezaSeleccionada.icono, posicionPieza, piezaJugador))
        setPosicionesPiezaDisparar(posicionesDispararPieza(piezaSeleccionada.icono, posicionPieza, piezaJugador))
        setPosicionPiezaSeleccionada(posicionPieza)
    }

    const aceptarPartida = () => {
        handleClickPersonaje(piezaSeleccionada)
        indicarJugadorListo(piezasJugador)
        setHabilitarOpcionAceptar(false)
        setBloquearOpciones(true)
    }

    const limpiarPiezaSeleccionada = (pieza) => {
        setPosicionesPiezaMoverse([])
        setPosicionesPiezaDisparar([])
        setPiezaSeleccionada(null)
        setPosicionPiezaSeleccionada("")
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = "rgba(255, 255, 255, 1)";
        }
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
        setCuadroRef,
        aceptarPartida,
    }
}
