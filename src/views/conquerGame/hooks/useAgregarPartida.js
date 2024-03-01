import { YUPCONQUERGAME } from '../../../types'
import { 
    useMyFormik,
//  useDeseosStore, 
//  useUiStore 
} from "../../../hooks";
export const useAgregarPartida = () => {

    // const { agregarDeseo, modificarDeseo,
    //     errorMessage, cerrarVentana, deseo } = useDeseosStore()
    // const { isDialogOpen, isCargando } = useUiStore();
    const { formik } = useMyFormik(
        {
            // vValor: deseo,
            // modificar: modificarDeseo,
            // agregar: agregarDeseo,
            // yup: YUPCONQUERGAME
        })

    const { handleSubmit, errors } = formik;

    return {
        handleSubmit,
        formik,
        errors,
        // deseo,
        // isDialogOpen,
        // errorMessage,
        // cerrarVentana,
        // isCargando
    }
}