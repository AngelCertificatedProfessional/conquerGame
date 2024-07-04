import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useConquerGameStore, useUsuarioStore, useSocket } from '../../../../hooks';
import { getEnvVariables } from '../../../../helpers';
export const useConquerGameLobbyPage = () => {
    const { VITE_SOCKET_URL } = getEnvVariables()
    const { conquerGame, startActualizarConquerGame, mostrarTableroSeleccion } = useConquerGameStore();
    const { user } = useUsuarioStore();
    const navigate = useNavigate();
    const { socket, conectarSocket } = useSocket(VITE_SOCKET_URL)

    useEffect(() => {
        conectarSocket()
    }, [conectarSocket])

    //Eschucar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}Lobby`, (conquerGameT) => {
            startActualizarConquerGame(conquerGameT)
        })
    }, [socket])

    useEffect(() => {
        socket?.on(`conquerGame${conquerGame.numeroPartida}IngresarSeleccionPersonaje`, (conquerGameT) => {
            for (let index = 0; index < conquerGameT.jugadores.length; index++) {
                if (conquerGameT.jugadores[index]._id === user.uid) {
                    conquerGameT.turno = conquerGameT.jugadores[index].turno;
                    break;
                }
            };
            startActualizarConquerGame(conquerGameT)
            navigate("/conquerGame/conquerGameLobbyTablero")
        })
    }, [socket])

    return {
        conquerGame,
        user,
        mostrarTableroSeleccion
    };
};