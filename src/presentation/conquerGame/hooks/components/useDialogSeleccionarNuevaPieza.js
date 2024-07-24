
import { useCallback, useEffect, useRef, useState } from "react";
import { inicializarPiezasJugador } from "../../../../helpers/conquerGame/inicializarPiezasJugador";
import { COLORMOVIMIENTODESSELECCION, COLORMOVIMIENTOSELECCION } from "../../../../types";
import { useConquerGameStore } from "../../../../hooks";

export const useDialogSeleccionarNuevaPieza = (aceptarPieza, mostrarVentana) => {
    const { conquerGame } = useConquerGameStore()
    const [piezasAyuda, setPiezasAyuda] = useState(null)
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const refsPiezas = useRef({});

    const inicializarPiezasAyuda = async () => {
        let piezas = await inicializarPiezasJugador(null)
        piezas = piezas.filter(pieza => pieza.tipo === 2)
        const piezasFiltradas = [];
        //Evitamos que se pueda seleccionar una pieza especial que ya este puesta en el mapa
        for (let pieza of piezas) {
            if (conquerGame.posicionPiezasGlobal.some(piezasT =>
                piezasT.nombre === `${conquerGame.turnoJugador}${pieza.icono}` &&
                piezasT.mostrar === true && piezasT.posicion !== ''
            )) continue
            piezasFiltradas.push(pieza)
        }
        setPiezasAyuda(piezasFiltradas)
    }

    useEffect(() => {
        if (!!mostrarVentana) inicializarPiezasAyuda()
    }, [mostrarVentana])

    const handleClickPersonaje = (pieza) => {
        if (!!piezaSeleccionada) {
            const ref = refsPiezas.current[piezaSeleccionada.titulo];
            if (ref) {
                ref.style.backgroundColor = COLORMOVIMIENTODESSELECCION;
            }
        }
        setPiezaSeleccionada(pieza)
        const ref = refsPiezas.current[pieza.titulo];
        if (ref) {
            ref.style.backgroundColor = COLORMOVIMIENTOSELECCION;
        }
    }

    const setListadoRef = useCallback((node, posicion) => {
        if (node) {
            refsPiezas.current[posicion] = node;
        }
    }, []);

    const cerrarVentana = () => {
        setPiezaSeleccionada(null)
        aceptarPieza(piezaSeleccionada)
    }

    return {
        handleClickPersonaje,
        setListadoRef,
        cerrarVentana,
        piezasAyuda,
        piezaSeleccionada,
    }
}