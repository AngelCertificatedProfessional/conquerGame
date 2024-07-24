import {
    useConquerGameStore,
} from "../../../../hooks";
export const useSideBarItemJugador = () => {

    const { conquerGame } = useConquerGameStore()

    return {
        conquerGame,
    }
}