import { Button, Card, CardContent, Stack } from "@mui/material"
import { useBuscarPartida } from "../hooks"
import { MyDataGrid } from "../../../template/components";
export const BuscarPartida = () => {

    const {
        mostrarVentana,
        partidas,
        columns,
        handleIngresar,
        buscarPartidas,
        setRowSelectionModel
    } = useBuscarPartida()

    if (mostrarVentana !== 2) return (<></>)
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={0}
                >

                    <Button type="submit" variant="contained"
                        onClick={buscarPartidas}
                    >
                        Actualizar
                    </Button>
                    <Button type="submit" variant="contained"
                        onClick={handleIngresar}
                    >
                        Ingresar
                    </Button>
                </Stack>

                <MyDataGrid
                    rows={partidas}
                    columns={columns}
                    handleClickColumn={setRowSelectionModel}
                />
            </CardContent>
        </Card>
    )
}
