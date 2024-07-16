import { Grid, ListItem, ListItemText } from "@mui/material"
import { CONQUERGAMEPARTIDA, useStylesConquerGame } from "../../../types"
import { useSideBarItemConquerGame } from "../hooks/views"

export const SideBarItemConquerGame = ({ jugador }) => {

    const { conquerGame } = useSideBarItemConquerGame()

    return (
        <ListItem disablePadding >
            <Grid container mt={2} p={2} sx={[
                useStylesConquerGame[`targetaJugador${jugador.turnoJugador}`],
                {
                    opacity: conquerGame.estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO ||
                        conquerGame.estatus === CONQUERGAMEPARTIDA.JUEGOINICIADO &&
                        conquerGame.turno === jugador.turnoJugador ?
                        1 : 0.5
                }
            ]}>
                {
                    conquerGame.estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO ?
                        <ListItemText primary={`${jugador.usuario} 
                            ${!!jugador.listo ? "Listo" : ""}`} />
                        :
                        <ListItemText primary={`${jugador.usuario}`} />
                }

            </Grid>
        </ListItem >
    )
}
