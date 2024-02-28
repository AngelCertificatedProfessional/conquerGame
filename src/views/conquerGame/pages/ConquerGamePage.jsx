import {
    Box, Grid, Typography
} from "@mui/material"
// // import { ListaReporte } from "../views/ListaReporte"
// import { DIRECCIONAMIENTO } from '../../../types'
// // import { useReporteStore } from "../../../hooks"
// import { useEffect } from "react"

export const ConquerGamePage = () => {
    // const { cerrarVentana } = useReporteStore()
    // useEffect(() => {
    //     cerrarVentana()
    // }, [])
    return (
        <>
            
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">
                        Conquer Game
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                </Grid>
            </Grid>
        </>
    )
}

export default ConquerGamePage