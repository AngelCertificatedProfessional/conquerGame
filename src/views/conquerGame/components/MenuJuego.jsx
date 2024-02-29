import { Button, Card, CardContent, Stack } from "@mui/material"

export const MenuJuego = () => {
  return (
    <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
            <Stack direction="column" spacing={2}>
                <Button variant="contained" fullWidth sx={{ flexGrow: { xs: 1, sm: 0 } }}>
                    Crear Partida
                </Button>
                <Button variant="contained" fullWidth sx={{ flexGrow: { xs: 1, sm: 0 } }}>
                    Buscar Partida
                </Button>
            </Stack>
        </CardContent>
    </Card>
  )
}
