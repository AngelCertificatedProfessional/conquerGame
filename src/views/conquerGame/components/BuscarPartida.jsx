import { Button, Card, CardContent, DialogActions } from "@mui/material"
import { useBuscarPartida } from "../hooks"
import { MyDataGrid } from "../../../template/components";
export const BuscarPartida = () => {

    const {
        mostrarVentana,
        partidas,
        columns,
        handleIngresar,
        setRowSelectionModel
    } = useBuscarPartida()

    if (mostrarVentana !== 2) return (<></>)
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Button type="submit" variant="contained"
                    onClick={handleIngresar}
                >
                    Ingresar
                </Button>
                <MyDataGrid
                    rows={partidas}
                    columns={columns}
                    handleClickColumn={setRowSelectionModel}
                />
            </CardContent>
        </Card>
    )
}
