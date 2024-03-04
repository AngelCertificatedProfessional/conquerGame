import { 
    useConquerGameStore,
} from "../../../hooks";
export const useMenuJuego = () => {

    const {startMostrarVentana} = useConquerGameStore()

    return {
        startMostrarVentana
    }
}