import {
    useMyFormik,
    useConquerGameStore,
    useUiStore
} from "../../../../hooks";
import { ACCIONTIPOJUEGOOBJETO, CANTIDADJUGADORESTIPOJUEGO } from "../../../../types";
export const useAgregarPartida = () => {

    const { partida, agregarPartida, mostrarVentana } = useConquerGameStore()

    const {
        errorMessage } = useUiStore();
    const { formik } = useMyFormik(
        {
            vValor: partida,
            agregar: agregarPartida,
        })

    const { handleSubmit, errors, values, setValues } = formik;

    const handleActualizarCantidadJugadores = (e) => {
        setValues({
            ...values,
            ['cantidadJugadores']: parseInt(e.target.value) === ACCIONTIPOJUEGOOBJETO.INDIVIDUAL
                ? CANTIDADJUGADORESTIPOJUEGO.INDIVIDUAL[0].id
                : CANTIDADJUGADORESTIPOJUEGO.EQUIPO[0].id
        })
    }
    return {
        handleSubmit,
        formik,
        errors,
        errorMessage,
        mostrarVentana,
        values,
        handleActualizarCantidadJugadores
    }
}