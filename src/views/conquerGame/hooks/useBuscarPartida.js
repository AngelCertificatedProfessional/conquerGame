import { useState } from "react";
import { 
    useConquerGameStore,
    useUiStore 
} from "../../../hooks";

const columns = [
    { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', flex: 1, hideable: true },
    // { field: 'creador', headerName: 'Creador', headerClassName: 'super-app-theme--header', flex: 1 },
    { field: 'cantidadJugadores', headerName: 'Jugadores', headerClassName: 'super-app-theme--header', flex: 1 },
    { field: 'tipoJuego', headerName: 'Tipo', headerClassName: 'super-app-theme--header', flex: 1 },
];

export const useBuscarPartida = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const {partidas,mostrarVentana} = useConquerGameStore()

    const { errorMessage } = useUiStore();

    return {
        partidas,
        mostrarVentana,
        columns,
        setRowSelectionModel
    }
}