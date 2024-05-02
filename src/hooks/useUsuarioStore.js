import { useDispatch, useSelector } from 'react-redux'
import { onChecking, onLogin, onLogout } from '../store';
import { conquerGameApi } from '../api';

export const useUsuarioStore = () => {

    const { status, errorMessage, user } = useSelector(state => state.usuario)
    const dispatch = useDispatch();

    const startLogin = async ({ correo, contrasena }) => {
        dispatch(onChecking())
        try {
            const { data } = await conquerGameApi.post('/usuario/iniciarSesion', { correo, contrasena })
            if (!!!data.token) throw 'Es necesario recibir el token';
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario, uid: data.uid }))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout())
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token')
        if (!token) return dispatch(onLogout())

        try {
            const { data } = await conquerGameApi.get('/usuario/renew')
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario, uid: data.uid }))
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout())
        }
    }

    const sesionInvitado = async () => {
        dispatch(onChecking())
        try {
            const { data } = await conquerGameApi.get('/usuario/agregarUsuarioInvitado')
            if (!!!data.token) throw 'Es necesario recibir el token';
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', data.usuario);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario }))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
        }
    }

    return {
        status,
        user,
        errorMessage,
        //Metodos
        checkAuthToken,
        startLogin,
        startLogout,
        sesionInvitado
    }
}
