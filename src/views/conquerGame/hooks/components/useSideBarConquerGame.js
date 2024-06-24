import { useConquerGameStore, useUsuarioStore } from "../../../../hooks"

export const useSideBarConquerGame = () => {

    const { conquerGame, iniciarPartida } = useConquerGameStore()
    const { user } = useUsuarioStore();

    return {
        conquerGame,
        user,
        iniciarPartida
    }
}