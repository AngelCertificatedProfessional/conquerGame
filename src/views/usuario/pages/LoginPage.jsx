import { Box, Button, CircularProgress, Grid, Paper, Typography, Stack } from "@mui/material"
import { FormikProvider } from "formik";
import { USER_STATUS } from "../../../types";
import { MyErrorF, MyTextFieldF } from "../../../template/components/inputs";
import { useLoginPage } from "../hooks";

export const LoginPage = () => {
    const {
        formik,
        handleSubmit,
        errors,
        status,
        errorMessage,
        sesionInvitado
    } = useLoginPage()

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        my: 8,
                        mx: 4
                    }}>
                    <Typography component="h1" variant="h5">
                        Inicio de Sesion
                    </Typography>
                    <FormikProvider value={formik}>
                        <Box component="form" noValidate onSubmit={handleSubmit}>
                            <MyTextFieldF
                                label="Correo"
                                name="correo"
                                required
                                type="email"
                                autoFocus
                            />
                            <MyTextFieldF
                                label="Contraseña"
                                name="contrasena"
                                required
                                type="password"
                            />
                            <Stack spacing={2} direction="row" sx={{ mt: 2 }} useFlexGap flexWrap="wrap">
                                <Button variant="contained" type="submit" sx={{ flexGrow: { xs: 1, sm: 0 } }}> Ingresar </Button>
                                <Button variant="contained" onClick={sesionInvitado} sx={{ flexGrow: { xs: 1, sm: 0 } }}> Invitado </Button>
                            </Stack>
                            <MyErrorF errors={errors.submit} />
                            <MyErrorF errors={errorMessage} />
                            {status === USER_STATUS.CHECKING &&
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    my: 8,
                                    mx: 4
                                }}>
                                    <CircularProgress />
                                </Box>
                            }
                        </Box>
                    </FormikProvider>
                </Box>
            </Grid>
        </Grid >
    )
}

export default LoginPage