import { useCallback, useEffect, useRef, useState } from "react";
import { useConquerGameStore, useSocket } from "../../../../hooks"
import {
    posicionesMovimientosPiezas,
    posicionesDispararPieza
} from "../../../../helpers/conquerGame/validaPosicionPieza";
import { compararJSON, getEnvVariables } from "../../../../helpers";
import { useNavigate } from 'react-router-dom';
import { inicializarPiezasJugador } from "../../../../helpers/conquerGame/inicializarPiezasJugador";
import { alertMensaje } from "../../../../plugins";
const drawerWidth = '200px';
export const useConquerGameJuegoTableroPage = () => {
    const { VITE_SOCKET_URL } = getEnvVariables()
    const { conquerGame, indicarJugadorListo,
        startActualizarConquerGame,
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
    const navigate = useNavigate();

    useEffect(() => {
        conectarSocket()
    }, [conectarSocket])

    const cargarPiezasJugador = async () => {
        const piezas = await inicializarPiezasJugador(conquerGame)
        setPiezasJugador(piezas)
    }

    useEffect(() => {
        cargarPiezasJugador()
    }, [])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}MoverPosicionPiezasGlobal`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
            setBloquearOpciones(false)
        })
    }, [socket])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}FinalizarPartida`, ({ mensaje }) => {
            alertMensaje("Ganador", mensaje, "success");
            setTimeout(() => {
                startActualizarConquerGame({})
                navigate("/conquerGame")
            }, 3000);
        })
    }, [socket])

    const setListadoRef = useCallback((node, posicion) => {
        if (node) {
            refsPiezas.current[posicion] = node;
        }
    }, []);

    const handleClickPersonaje = (pieza) => {
        if (!!bloquearOpciones) return
        if (conquerGame.turno !== conquerGame.turnoJugador) return
        if (conquerGame.posicionPiezasGlobal.some(({ nombre }) => nombre === pieza.nombre && pieza.posicion !== '')) return
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
        //Agregamos las posiciones al nuevo arreglo\
        if (!!bloquearOpciones) return
        if (!!!piezaSeleccionada) return
        const bExisteMovimiento = posicionesPiezaMoverse.includes(posicionPieza)
        const bExisteDisparar = posicionesPiezaDisparar.includes(posicionPieza)
        if (!bExisteMovimiento && !bExisteDisparar) return
        let nuevasPocisiones = []
        let reyEliminado = ''
        if (bExisteMovimiento) {
            [nuevasPocisiones, reyEliminado] = clickMovimiento(posicionPieza);
        } else if (bExisteDisparar) {
            [nuevasPocisiones, reyEliminado] = clickDisparo(posicionPieza)
            if (compararJSON(conquerGame.posicionPiezasGlobal, nuevoPosiciones)) return
        }
        console.log(reyEliminado)
        const nuevosReyesVivos = eliminoRey(reyEliminado, nuevasPocisiones)
        console.log(nuevosReyesVivos)
        const siguienteTurno = evaluarSiguienteTurno(nuevosReyesVivos);
        console.log(siguienteTurno)
        setBloquearOpciones(true)
        moverPosicionPiezasGlobal(nuevasPocisiones, siguienteTurno, nuevosReyesVivos)
        if (!!piezaSeleccionada) limpiarPiezaSeleccionada(piezaSeleccionada)
    }

    const clickMovimiento = (posicionPieza) => {
        let sReyElimino = ''
        const piezas = conquerGame.posicionPiezasGlobal.map((pieza) => {
            if (pieza.nombre !== piezaSeleccionada.nombre &&
                pieza.posicion === posicionPieza && !!pieza.rey) {
                sReyElimino = pieza.jugador
            }
            return {
                ...pieza,
                posicion:
                    pieza.nombre === piezaSeleccionada.nombre ? posicionPieza //movemos la pieza a su nueva ubicacion
                        : pieza.nombre !== piezaSeleccionada.nombre
                            && pieza.posicion === posicionPieza ? '' //validamos que si otra pieza esta en esa posicion la eliminamos
                            : pieza.posicion //las demas piezas mantienen su posicion
            };
        })
        return [piezas, sReyElimino];
    }

    const clickDisparo = (posicionPieza) => {
        let sReyElimino = ''
        const piezas = conquerGame.posicionPiezasGlobal.map((pieza) => {
            if (pieza.posicion === posicionPieza && !!pieza.rey) {
                sReyElimino = pieza.jugador
            }
            return {
                ...pieza,
                posicion:
                    pieza.posicion === posicionPieza ? '' : pieza.posicion//eliminamos la pieza que estaba apuntando
            };
        })
        return [piezas, sReyElimino];
    }

    const eliminoRey = (sJugadoreliminado, nuevasPocisiones) => {
        //validamos que exista algun rey del jugador en caso de existir regresamos el mismo arreglo
        if (sJugadoreliminado === '') return conquerGame.reyesVivos
        if (
            nuevasPocisiones.some((pieza) =>
                pieza.jugador === sJugadoreliminado &&
                pieza.posicion !== '' &&
                !!pieza.rey)) return conquerGame.reyesVivos
        return conquerGame.reyesVivos.filter(turno => turno != sJugadoreliminado)
    }

    const evaluarSiguienteTurno = (reyesVivos) => {

        let nPosicion = reyesVivos.findIndex(pieza => pieza === conquerGame.turno)
        if (nPosicion >= reyesVivos.length - 1) {
            nPosicion = 0;
        } else {
            nPosicion++;
        }
        return reyesVivos[nPosicion];
    }

    const evaluarPosiciones = (posicionPieza, piezaJugador, piezaSeleccionada,) => {
        setPosicionesPiezaMoverse(posicionesMovimientosPiezas(piezaSeleccionada.icono, posicionPieza, piezaJugador, conquerGame.turnoJugador))
        setPosicionesPiezaDisparar(posicionesDispararPieza(piezaSeleccionada.icono, posicionPieza, piezaJugador, conquerGame.turnoJugador))
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
        aceptarPartida,
    }
}
