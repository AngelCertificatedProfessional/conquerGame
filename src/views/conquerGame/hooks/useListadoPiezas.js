import { useEffect } from "react"
import { useConquerGameStore } from "../../../hooks"

export const useListadoPiezas = () => {

    const drawerWidth = '200px'
    const { conquerGame, inicializarPiezasJugador } = useConquerGameStore();

    useEffect(() => {
        inicializarPiezasJugador()
    }, [])


    return {
        conquerGame,
        drawerWidth
    }
}
