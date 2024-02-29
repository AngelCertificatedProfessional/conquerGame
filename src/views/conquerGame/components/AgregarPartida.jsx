import { Button, Card, CardContent, Stack } from "@mui/material"
import { FormikProvider } from "formik"
import { useAgregarPartida } from "../hooks"
export const AgregarPartida = () => {

    const {
        handleSubmit,
        formik,
        errors,
    } = useAgregarPartida()
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <FormikProvider value={formik}>
                    {/* <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: isCargando ? 0.5 : 1,
                            pointerEvents: isCargando ? "none" : "auto"
                        }}>
                        <Typography variant="h6">
                            {
                                deseo.id !== undefined && deseo.id !== '' ? "Modificar " : "Agregar "
                            }
                            Deseos
                        </Typography>

                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <MyTextFieldF
                                    label="Titulo"
                                    name="titulo"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MySelectF
                                    label="Prioridad"
                                    name="prioridad"
                                    menuIt={PRIORIDAD}
                                    defaultValue="1"
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <MyDatePickerF
                                    label="Conseguir Antes de"
                                    name="fechaAsignacion"
                                    setFieldValue={setFieldValue} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MyTextFieldF
                                    label="Gasto Aprox"
                                    name="gasto"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        inputComponent: NumericFormatCustom,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={12} >
                                <MyCheckBox
                                    label="Comprado"
                                    name="comprado"
                                />
                            </Grid>
                        </Grid>

                        <MyTextFieldF
                            label="Descripcion"
                            name="descripcion"
                            required
                            multiline
                            rows={4}
                        />

                        <DialogActions>
                            <Button onClick={cerrarVentana} >
                                Cerrar
                            </Button>
                            <Button type="submit" variant="contained">
                                {
                                    deseo.id !== undefined && deseo.id !== '' ? "Modificar" : "Agregar"
                                }
                            </Button>
                        </DialogActions>
                        <MyErrorF errors={errors.submit} />
                        <MyErrorF errors={errorMessage} />
                        <Cargando />
                    </Box> */}
                </FormikProvider>
            </CardContent>
        </Card>
    )
}
