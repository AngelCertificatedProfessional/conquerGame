import { useState } from "react";
import { useMyFormik, useUsuarioStore } from "../../../hooks"
import { YUPUSUARIO } from "../../../types";
export const useLoginPage = () => {
    const { status, startLogin, errorMessage, sesionInvitado } = useUsuarioStore()
    const [vValor] = useState({
        correo: '',
        contrasena: '',
    })

    const { formik } = useMyFormik(
        {
            vValor,
            agregar: startLogin,
            yup: YUPUSUARIO
        })

    const { handleSubmit, errors } = formik;
    return {
        formik,
        handleSubmit,
        errors,
        status,
        errorMessage,
        sesionInvitado
    }
}
