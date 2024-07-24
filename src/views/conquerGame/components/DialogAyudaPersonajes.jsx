import {
    Box, Button, Dialog, DialogActions, DialogContent,
    DialogTitle, Grid, Typography
} from "@mui/material"
import { ListadoPiezas } from "../views";
import { useDialogAyudaPersonajes } from "../hooks";
export const DialogAyudaPersonajes = ({
    mostraAyuda,
    setMostrarAyuda
}) => {

    const {
        setListadoRef,
        handleClickPersonaje,
        cerrarVentana,
        piezasAyuda,
        piezaSeleccionada
    } = useDialogAyudaPersonajes(setMostrarAyuda);

    return (
        <Dialog
            open={mostraAyuda}
            scroll="paper"
            // fullWidth={true}
            maxWidth="lg"
        >
            <DialogContent sx={{ maxWidth: 960 }}>
                {/* necesario para la divicion de las columnas */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    {
                        !!piezasAyuda && piezasAyuda.map((pieza) =>
                            < ListadoPiezas
                                pieza={pieza}
                                key={pieza.titulo}
                                handleClick={() => handleClickPersonaje(pieza)}
                                ref={node => setListadoRef(node, pieza.titulo)}
                            />
                        )
                    }
                </Box>
                {
                    piezaSeleccionada &&
                    <>
                        <DialogTitle variant="h6">
                            {piezaSeleccionada.titulo}
                        </DialogTitle>
                        <Grid container columnSpacing={2} dividers={true}>
                            <Grid item xs={12} md={6}>
                                <Typography gutterBottom>
                                    {piezaSeleccionada.descripcion}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Box
                                    component="img"
                                    height={400}
                                    width={400}
                                    src={piezaSeleccionada.direccionMovimiento}
                                />
                            </Grid>
                        </Grid>
                    </>

                }
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
                <Button onClick={cerrarVentana} variant="contained">
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog >
    )
}
