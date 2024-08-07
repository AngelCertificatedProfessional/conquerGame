import { useDispatch, useSelector } from 'react-redux'
import { onChecking, onLogin, onLogout } from '../store';
import { conquerGameApi } from '../api';

import { useSocket } from './';


export const useUsuarioStore = () => {

    const { desconectarSocket, conectarSocket } = useSocket()

    const { status, errorMessage, user } = useSelector(state => state.usuario)
    const dispatch = useDispatch();

    const startLogin = async ({ correo, contrasena }) => {
        dispatch(onChecking())
        try {
            const { data } = await conquerGameApi.post('/usuario/iniciarSesion', { correo, contrasena })
            if (!!!data.token) throw 'Es necesario recibir el token';
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario, uid: data.uid }))
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'))
        }
    }

    const startLogout = () => {
        sessionStorage.clear();
        desconectarSocket()
        dispatch(onLogout())
    }

    const checkAuthToken = async () => {
        const token = sessionStorage.getItem('token')
        if (!token) {
            dispatch(onLogout())
            desconectarSocket()
            return
        }

        try {
            const { data } = await conquerGameApi.get('/usuario/renew')
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('usuario', data.usuario);
            sessionStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario, uid: data.uid }))
            conectarSocket()
        } catch (error) {
            sessionStorage.clear();
            dispatch(onLogout())
        }
    }

    const sesionInvitado = async () => {
        dispatch(onChecking())
        try {
            const { data } = await conquerGameApi.get('/usuario/agregarUsuarioInvitado')
            if (!!!data.token) throw 'Es necesario recibir el token';
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('usuario', data.usuario);
            sessionStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ usuario: data.usuario, uid: data.uid }))
            conectarSocket()
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
