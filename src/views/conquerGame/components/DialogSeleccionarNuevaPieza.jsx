import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material"
import { ListadoPiezas } from "../views"
import { useDialogSeleccionarNuevaPieza } from "../hooks";

export const DialogSeleccionarNuevaPieza = ({ mostrarVentana, aceptarPieza }) => {

    const {
        setListadoRef,
        handleClickPersonaje,
        cerrarVentana,
        piezasAyuda,
        piezaSeleccionada
    } = useDialogSeleccionarNuevaPieza(aceptarPieza, mostrarVentana);

    return (
        <Dialog open={mostrarVentana}
            scroll="paper"
            maxWidth="lg"
        >
            {/* necesario para la divicion de las columnas */}
            <DialogContent sx={{ maxWidth: 960 }}>
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
                    Seleccionar
                </Button>
            </DialogActions>
        </Dialog >
    )
}
