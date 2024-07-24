import { Button, Card, CardContent, Stack } from "@mui/material"
import { useMenuJuego } from "../hooks"

export const MenuJuego = () => {

    const {startMostrarVentana} = useMenuJuego()

    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Stack direction="column" spacing={2}>
                    <Button variant="contained" onClick={ ()=> startMostrarVentana(1)} fullWidth sx={{ flexGrow: { xs: 1, sm: 0 } }}>
                        Crear Partida
                    </Button>
                    <Button variant="contained" onClick={ ()=> startMostrarVentana(2)} fullWidth sx={{ flexGrow: { xs: 1, sm: 0 } }}>
                        Buscar Partida
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
    }
