import {
    Box, Typography
} from "@mui/material"
// import { ListaReporte } from "../views/ListaReporte"
// import { REPORTES } from '../../../types'
// import { useReporteStore } from "../../../hooks"
import { useEffect } from "react"

export const MenuPrincipalJuegosPage = () => {
    // const { cerrarVentana } = useReporteStore()
    // useEffect(() => {
    //     cerrarVentana()
    // }, [])
    return (
        <>
            <Typography variant="h4">
                Menu principal
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
                {/* {REPORTES.map(reporte => (
                    <ListaReporte key={reporte.id} reporte={reporte} />
                ))} */}
            </Box>
        </>
    )
}

export default MenuPrincipalJuegosPage