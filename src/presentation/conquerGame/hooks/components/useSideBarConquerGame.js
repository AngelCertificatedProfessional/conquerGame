import { useState } from "react";
import { useConquerGameStore, useUsuarioStore } from "../../../../hooks"

export const useSideBarConquerGame = () => {

    const { conquerGame, iniciarPartida } = useConquerGameStore()
    const { user } = useUsuarioStore();
    const [mostraAyuda, setMostrarAyuda] = useState(false)
    return {
        conquerGame,
        mostraAyuda,
        user,
        iniciarPartida,
        setMostrarAyuda
    }
}