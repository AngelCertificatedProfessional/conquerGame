import { useEffect, useState } from "react";
import {
    useConquerGameStore,
    useUiStore
} from "../../../hooks";

const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', flex: 1, hideable: true },
    { field: 'cantidadJugadores', headerName: 'Cant Jugadores', headerClassName: 'super-app-theme--header', flex: 1 },
    { field: 'tipoJuego', headerName: 'Tipo', headerClassName: 'super-app-theme--header', flex: 1 },
    {
        field: 'usuario', headerName: 'Usuario', headerClassName: 'super-app-theme--header', flex: 1,
        valueGetter: (params) => params.row?.usuarios?.usuario
    },
];

export const useBuscarPartida = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const { partidas, mostrarVentana, buscarPartidas } = useConquerGameStore()

    const { errorMessage } = useUiStore();

    useEffect(() => {
        buscarPartidas()
    }, [])

    return {
        partidas,
        mostrarVentana,
        columns,
        setRowSelectionModel
    }
}