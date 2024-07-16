import {
    useConquerGameStore,
} from "../../../../hooks";
export const useSideBarItemConquerGame = () => {

    const { conquerGame } = useConquerGameStore()

    return {
        conquerGame,
    }
}