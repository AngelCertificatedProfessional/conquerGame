import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useConquerGameStore, useUsuarioStore, useSocket } from '../../../../hooks';
export const useConquerGameLobbyPage = () => {
    const { conquerGame, startActualizarConquerGame, mostrarTableroSeleccion } = useConquerGameStore();
    const { user } = useUsuarioStore();
    const navigate = useNavigate();
    const { socket } = useSocket()

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
                    conquerGameT.turnoJugador = conquerGameT.jugadores[index].turnoJugador;
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