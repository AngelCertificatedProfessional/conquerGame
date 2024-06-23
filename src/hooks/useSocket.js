import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';


export const useSocket = (serverPath) => {
    //Estos cambios evitaran que el socket se cree de golpe

    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(false);


    //Se rememorzan para poder evitar que cuando el la aplicacion refresca, evitar 
    //ejecutar los metodos cada ves que el elemento se redibjuje
    const conectarSocket = useCallback(() => {
        // const token = sessionStorage.getItem('token')
        const socketTemp = io.connect(serverPath,
            {
                transports: ['websocket'],
                autoConnect: true, //para que se mantenga siempre conectado
                forceNew: true, //cuando se mande la instruccion de connect se mandara una nueva coneccion
                // query: {
                //     'x-token': token
                // }
            }
        )

        setSocket(socketTemp)

    }, [serverPath])

    const desconectarSocket = useCallback(() => {
        socket?.disconnect();

    }, [socket])


    useEffect(() => {
        //el ? es para validar que cuando sea diferente de null cree realize la accion
        setOnline(socket?.connected);
    }, [socket])

    useEffect(() => {
        //el ? es para validar que cuando sea diferente de null cree realize la accion
        socket?.on('connect', () => setOnline(true));
    }, [socket])

    useEffect(() => {
        //el ? es para validar que cuando sea diferente de null cree realize la accion
        socket?.on('disconnect', () => setOnline(false));
    }, [socket])

    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}