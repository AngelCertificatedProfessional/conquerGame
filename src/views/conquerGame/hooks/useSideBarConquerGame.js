import {
    useConquerGameStore,
} from "../../../hooks";
export const useSideBarConquerGame = () => {

    const { conquerGame } = useConquerGameStore()

    return {
        conquerGame
    }
}