import { Grid, ListItem, ListItemText } from "@mui/material"
import { CONQUERGAMEPARTIDA, useStylesConquerGame } from "../../../types"

export const SideBarItemConquerGame = ({ jugador, estatus }) => {
    return (
        <ListItem disablePadding >
            <Grid container mt={2} p={2} sx={[useStylesConquerGame[`targetaJugador${jugador.turno}`]]}>
                {
                    estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO ?
                        <ListItemText primary={`${jugador.usuario} 
                            ${!!jugador.listo ? "Listo" : ""}`} />
                        :
                        <ListItemText primary={`${jugador.usuario}`} />
                }

            </Grid>
        </ListItem >
    )
}
