import { useEffect, useState } from "react";
import {
    useConquerGameStore,
    useUiStore
} from "../../../../hooks";

const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', flex: 1, hideable: true },
    { field: 'cantidadJugadores', headerName: 'Max. Cant Jugadores', headerClassName: 'super-app-theme--header', flex: 1 },
    { field: 'numeroPartida', headerName: 'Partida', headerClassName: 'super-app-theme--header', flex: 1 },
    { field: 'tipoJuegoDescripcion', headerName: 'Tipo', headerClassName: 'super-app-theme--header', flex: 1 },
    {
        field: 'usuario', headerName: 'Usuario', headerClassName: 'super-app-theme--header', flex: 1,
        valueGetter: (params) => params.row?.usuarios?.usuario
    },
];

export const useBuscarPartida = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const { partidas, mostrarVentana, buscarPartidas, ingresarLobbyPartida } = useConquerGameStore()
    const { errorMessage } = useUiStore();

    useEffect(() => {
        buscarPartidas()
    }, [])

    const handleIngresar = () => {
        ingresarLobbyPartida(rowSelectionModel[0])
    }

    return {
        partidas,
        mostrarVentana,
        columns,
        setRowSelectionModel,
        handleIngresar,
        buscarPartidas
    }
}