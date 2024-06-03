import {
    Grid, Typography
} from "@mui/material"
import { MenuJuego, AgregarPartida, BuscarPartida } from "../components"
// // import { useReporteStore } from "../../../hooks"
// import { useEffect } from "react"

export const ConquerGamePage = () => {
    // const { cerrarVentana } = useReporteStore()
    // useEffect(() => {
    //     cerrarVentana()
    // }, [])
    return (
        <>
            <Typography variant="h4">
                Conquer Game
            </Typography>
            <Grid container columnSpacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                    <MenuJuego />
                </Grid>
                <Grid item xs={12} md={6}>
                    <AgregarPartida />
                    <BuscarPartida />
                </Grid>
            </Grid>
        </>
    )
}

export default ConquerGamePage