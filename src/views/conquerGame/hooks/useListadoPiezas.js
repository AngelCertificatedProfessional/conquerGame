import { useEffect } from "react"
import { useConquerGameStore } from "../../../hooks"

export const useListadoPiezas = () => {

    const { conquerGame, inicializarPiezasJugador } = useConquerGameStore();

    useEffect(() => {
        inicializarPiezasJugador()
    }, [])


    return {
        conquerGame
    }
}
