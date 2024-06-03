//ConquerGameLobby
// import { YUPCONQUERGAMELOBBY } from '../../../types'
import { useMyFormik, useConquerGameStore, useUiStore, useUsuarioStore } from '../../../hooks';
export const useConquerGameLobbyPage = () => {
    const { conquerGame, startActualizarConquerGame, mostrarTableroSeleccion } = useConquerGameStore();
    const { user } = useUsuarioStore();
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
        conquerGame,
        user,
        startActualizarConquerGame,
        mostrarTableroSeleccion
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