import { useCallback, useEffect, useRef, useState } from "react";
import { useConquerGameStore, useSocket } from "../../../../hooks"
import {
    posicionesMovimientosPiezas
} from "../../../../helpers/conquerGame/validaPosicionPieza";
import { compararJSON, getEnvVariables } from "../../../../helpers";
import { useNavigate } from 'react-router-dom';
import { inicializarPiezasJugador } from "../../../../helpers/conquerGame/inicializarPiezasJugador";
import { alertMensaje } from "../../../../plugins";
import { COLORMOVIMIENTODESSELECCION, COLORMOVIMIENTOSELECCION } from "../../../../types";
const drawerWidth = '200px';
export const useConquerGameJuegoTableroPage = () => {
    const { VITE_SOCKET_URL } = getEnvVariables()
    const { conquerGame,
        startActualizarConquerGame,
        startActualizarPosicionAsesino,
        moverPosicionPiezasGlobal } = useConquerGameStore();
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const [piezasJugador, setPiezasJugador] = useState([])
    const [posicionesPiezaMoverse, setPosicionesPiezaMoverse] = useState([])
    const [posicionesPiezaDisparar, setPosicionesPiezaDisparar] = useState([])
    const [posicionPiezaSeleccionada, setPosicionPiezaSeleccionada] = useState('')
    const [habilitarOpcionAceptar, setHabilitarOpcionAceptar] = useState(false)
    const [bloquearOpciones, setBloquearOpciones] = useState(false)
    const [movioAsesino, setMovioAsesino] = useState(false)
    const [tiempoTexto, setTiempoTexto] = useState('01:00')
    const [tiempoContador, setTiempoContador] = useState(60)
    const intervalRef = useRef(0);
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
        setHabilitarOpcionAceptar(conquerGame.turno === conquerGame.turnoJugador)
        actualizarTiempoTexto()
    }, [])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}MoverPosicionPiezasGlobal`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
            setBloquearOpciones(false)
            setHabilitarOpcionAceptar(conquerGameT.turno === conquerGame.turnoJugador)
            actualizarTiempoTexto()
        })
    }, [socket])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}FinalizarPartida`, ({ mensaje }) => {
            alertMensaje("Ganador", mensaje, "success");
            clearInterval(intervalRef.current);
            setTimeout(() => {
                startActualizarConquerGame({})
                navigate("/conquerGame")
            }, 3000);
        })
    }, [socket])

    useEffect(() => {
        if (tiempoContador === 60) {
            setTiempoTexto("01:00")
        } else {
            setTiempoTexto(`00:${tiempoContador >= 10 ? tiempoContador : '0' + tiempoContador}`)
            if (tiempoContador <= 0) {
                clearInterval(intervalRef.current);
                if (conquerGame.turno === conquerGame.turnoJugador) {
                    handlePasarTurno()
                }
            }
        }
    }, [tiempoContador])

    const setListadoRef = useCallback((node, posicion) => {
        if (node) {
            refsPiezas.current[posicion] = node;
        }
    }, []);

    const actualizarTiempoTexto = () => {
        clearInterval(intervalRef.current);
        setTiempoContador(60)
        intervalRef.current = setInterval(() => {
            setTiempoContador((tiempoContador) => tiempoContador - 1)
        }, 1000);
    }



    const handleClickPersonaje = (pieza) => {
        if (!!bloquearOpciones) return
        if (!!movioAsesino) return
        if (conquerGame.turno !== conquerGame.turnoJugador) return
        if (conquerGame.posicionPiezasGlobal.some(({ nombre, posicion }) => nombre === pieza.nombre && posicion === '')) return
        if (!!piezaSeleccionada && piezaSeleccionada.nombre === pieza.nombre) {
            limpiarPiezaSeleccionada(pieza)
            return
        }

        if (!!piezaSeleccionada) {
            const ref = refsPiezas.current[piezaSeleccionada.nombre];
            if (ref) {
                ref.style.backgroundColor = COLORMOVIMIENTODESSELECCION;
            }
        }
        setPiezaSeleccionada(pieza)
        const { posicion } = conquerGame.posicionPiezasGlobal.find(({ nombre }) => nombre === pieza.nombre)
        evaluarPosiciones(!!posicion ? posicion : '', conquerGame.posicionPiezasGlobal, pieza, movioAsesino)
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = COLORMOVIMIENTOSELECCION;
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (conquerGame.turno !== conquerGame.turnoJugador) return
        const pieza = conquerGame.posicionPiezasGlobal.find(pieza =>
            posicionPieza === pieza.posicion && pieza.jugador === conquerGame.turnoJugador)
        if (!!pieza) {
            handleClickPersonaje(pieza)
        } else {
            clickMoverDisparar(posicionPieza)
        }
    }

    const clickMoverDisparar = (posicionPieza) => {
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
            if (compararJSON(conquerGame.posicionPiezasGlobal, nuevasPocisiones)) return
        }
        const nuevosReyesVivos = eliminoRey(reyEliminado, nuevasPocisiones)
        let siguienteTurno = conquerGame.turnoJugador
        if (!!piezaSeleccionada.asesino && !movioAsesino && nuevosReyesVivos.length > 1) {
            setMovioAsesino(true)
            startActualizarPosicionAsesino(nuevasPocisiones)
            evaluarPosiciones(posicionPieza, nuevasPocisiones, piezaSeleccionada, true)
        } else {
            setHabilitarOpcionAceptar(false)
            setMovioAsesino(false)
            siguienteTurno = evaluarSiguienteTurno(nuevosReyesVivos);
            setBloquearOpciones(true)
            moverPosicionPiezasGlobal(nuevasPocisiones, siguienteTurno, nuevosReyesVivos)
            if (!!piezaSeleccionada) limpiarPiezaSeleccionada(piezaSeleccionada)
        }
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

    const evaluarPosiciones = (posicionPieza, piezaJugador, piezaSeleccionada, bMovioAsesino) => {

        const [posicionesPiezaMoverseT, posicionesPiezaDisparar] =
            posicionesMovimientosPiezas(piezaSeleccionada.icono, posicionPieza,
                piezaJugador, conquerGame.turnoJugador, bMovioAsesino)

        setPosicionesPiezaMoverse(posicionesPiezaMoverseT)
        setPosicionesPiezaDisparar(posicionesPiezaDisparar)
        setPosicionPiezaSeleccionada(posicionPieza)
    }

    const handlePasarTurno = () => {
        const nuevosReyesVivos = eliminoRey('', conquerGame.posicionPiezasGlobal)
        setHabilitarOpcionAceptar(false)
        setBloquearOpciones(true)
        setMovioAsesino(false)
        const siguienteTurno = evaluarSiguienteTurno(nuevosReyesVivos);
        moverPosicionPiezasGlobal(conquerGame.posicionPiezasGlobal, siguienteTurno, nuevosReyesVivos)
        if (!!piezaSeleccionada) limpiarPiezaSeleccionada(piezaSeleccionada)
    }

    const limpiarPiezaSeleccionada = (pieza) => {
        setPosicionesPiezaMoverse([])
        setPosicionesPiezaDisparar([])
        setPiezaSeleccionada(null)
        setPosicionPiezaSeleccionada("")
        const ref = refsPiezas.current[pieza.nombre];
        if (ref) {
            ref.style.backgroundColor = COLORMOVIMIENTODESSELECCION;
        }
    }

    return {
        conquerGame,
        movioAsesino,
        drawerWidth,
        piezasJugador,
        habilitarOpcionAceptar,
        posicionesPiezaMoverse,
        posicionesPiezaDisparar,
        posicionPiezaSeleccionada,
        tiempoTexto,
        handleClickTablero,
        handleClickPersonaje,
        setListadoRef,
        handlePasarTurno,
    }
}
