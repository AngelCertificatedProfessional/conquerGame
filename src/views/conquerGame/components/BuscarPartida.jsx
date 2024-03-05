import { Card, CardContent } from "@mui/material"
import { useBuscarPartida } from "../hooks"
import { Cargando, MyDataGrid } from "../../../template/components";
export const BuscarPartida = () => {

    const {
        mostrarVentana,
        partidas,
        columns,
        setRowSelectionModel
    } = useBuscarPartida()

    if(mostrarVentana !== 2) return(<></>)
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <MyDataGrid
                    rows={partidas}
                    columns={columns}
                    handleClickColumn={setRowSelectionModel}
                />
            </CardContent>
        </Card>
    )
}
