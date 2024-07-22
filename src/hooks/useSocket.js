import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isOnline, connectSocket } from '../store';

export const useSocket = () => {

    const dispatch = useDispatch();
    const { online, socket } = useSelector(state => state.socket);
    //Estos cambios evitaran que el socket se cree de golpe
    //Se rememorzan para poder evitar que cuando el la aplicacion refresca, evitar 
    //ejecutar los metodos cada ves que el elemento se redibjuje
    const conectarSocket = useCallback(() => {
        if (!!socket) return
        dispatch(connectSocket())
    }, [])

    const desconectarSocket = useCallback(() => {
        if (!!!socket) return
        socket.disconnect();
    }, [socket])

    useEffect(() => {
        //el ? es para validar que cuando sea diferente de null cree realize la accion
        socket?.on('disconnect', () => dispatch(isOnline(true)));
    }, [socket])

    useEffect(() => {
        //el ? es para validar que cuando sea diferente de null cree realize la accion
        socket?.on('disconnect', () => dispatch(isOnline(false)));
    }, [socket])

    return {
        socket,
        online,
        desconectarSocket,
        conectarSocket
    }
}