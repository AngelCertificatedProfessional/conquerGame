//ConquerGameLobby
// import { YUPCONQUERGAMELOBBY } from '../../../types'
import { useMyFormik, useConquerGameStore, useUiStore } from '../../../hooks';
export const useConquerGameLobbyPage= () => {
    const { conquerGame } = useConquerGameStore();
    // const { isDialogOpen, isCargando } = useUiStore();
    // const { formik } = useMyFormik(
    //     {
    //         vValor: ConquerGameLobby,
    //         modificar: modificarConquerGameLobby,
    //         agregar: agregarConquerGameLobby,
    //         yup: YUPCONQUERGAMELOBBY
    //     });

    // const { handleSubmit, errors, setFieldValue } = formik;

    return {
        conquerGame
        // handleSubmit,
        // formik,
        // errors,
        // setFieldValue,
        // ConquerGameLobby,
        // isDialogOpen,
        // errorMessage,
        // cerrarVentana,
        // isCargando
    };
};