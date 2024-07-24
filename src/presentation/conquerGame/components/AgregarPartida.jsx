import { Box, Button, Card, CardContent, DialogActions, Stack, Typography } from "@mui/material"
import { FormikProvider } from "formik"
import { MyErrorF, MyRadioF, MySelectF } from "../../../template/components/inputs";
import { useAgregarPartida } from "../hooks"
import { Cargando } from "../../../template/components";
import { ACCIONTIPOJUEGO, ACCIONTIPOJUEGOOBJETO, CANTIDADJUGADORESTIPOJUEGO } from "../../../types";
export const AgregarPartida = () => {

    const {
        handleSubmit,
        formik,
        errors,
        errorMessage,
        mostrarVentana,
        values,
        handleActualizarCantidadJugadores
    } = useAgregarPartida()

    if (mostrarVentana !== 1) return (<></>)
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <FormikProvider value={formik}>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // opacity: isCargando ? 0.5 : 1,
                            // pointerEvents: isCargando ? "none" : "auto"
                        }}>
                        <Typography variant="h6">
                            Crear Partida
                        </Typography>
                        <MyRadioF
                            label="Tipo Juego"
                            name="tipoJuego"
                            menuIt={ACCIONTIPOJUEGO}
                            onChange={handleActualizarCantidadJugadores}
                        />
                        <MySelectF
                            label="Cantidad de Jugadores"
                            name="cantidadJugadores"
                            menuIt={
                                parseInt(values.tipoJuego) === ACCIONTIPOJUEGOOBJETO.INDIVIDUAL ?
                                    CANTIDADJUGADORESTIPOJUEGO.INDIVIDUAL :
                                    CANTIDADJUGADORESTIPOJUEGO.EQUIPO
                            }
                        />
                        <DialogActions>
                            <Button type="submit" variant="contained">
                                Crear Partida
                            </Button>
                        </DialogActions>
                        <MyErrorF errors={errors.submit} />
                        <MyErrorF errors={errorMessage} />
                        <Cargando />
                    </Box>
                </FormikProvider>
            </CardContent>
        </Card>
    )
}
