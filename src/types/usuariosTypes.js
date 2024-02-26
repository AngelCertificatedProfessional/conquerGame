import * as Yup from 'yup';
export const USER_STATUS = Object.freeze({
    CHECKING: 1,
    AUTENTICATED: 2,
    NOTAUTENTICATED: 3
})

export const YUPUSUARIO = Yup.object({
    correo: Yup
        .string()
        .email('Debe ser un correo valido')
        .max(255)
        .required('Correo es requerido'),
    contrasena: Yup
        .string()
        .max(255)
        .required('La Contraseña es requerida')
})