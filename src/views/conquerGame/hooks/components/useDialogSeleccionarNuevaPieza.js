
import { useCallback, useEffect, useRef, useState } from "react";
import { inicializarPiezasJugador } from "../../../../helpers/conquerGame/inicializarPiezasJugador";
import { COLORMOVIMIENTODESSELECCION, COLORMOVIMIENTOSELECCION } from "../../../../types";

export const useDialogSeleccionarNuevaPieza = (aceptarPieza) => {

    const [piezasAyuda, setPiezasAyuda] = useState(null)
    const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)
    const refsPiezas = useRef({});

    const inicializarPiezasAyuda = async () => {
        let piezas = await inicializarPiezasJugador(null)
        piezas = piezas.filter(pieza => pieza.tipo === 2)
        setPiezasAyuda(piezas)
    }

    useEffect(() => {
        inicializarPiezasAyuda()
    }, [])

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