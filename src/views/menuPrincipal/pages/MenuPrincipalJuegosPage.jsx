import {
    Box, Typography
} from "@mui/material"
// import { ListaReporte } from "../views/ListaReporte"
import { DIRECCIONAMIENTO } from '../../../types'
// import { useReporteStore } from "../../../hooks"
import { useEffect } from "react"
import { ListaJuego } from "../components/ListaJuego"

export const MenuPrincipalJuegosPage = () => {
    // const { cerrarVentana } = useReporteStore()
    // useEffect(() => {
    //     cerrarVentana()
    // }, [])
    return (
        <>
            <Typography variant="h4">
                Games
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                    },
                }}
            >
                {DIRECCIONAMIENTO.map(direccion => (
                    <ListaJuego key={direccion.newTitle} juego={direccion} />
                ))}
            </Box>
        </>
    )
}

export default MenuPrincipalJuegosPage