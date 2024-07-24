import { Grid, ListItem, ListItemText } from "@mui/material"
import { CONQUERGAMEPARTIDA, useStylesConquerGame } from "../../../types"
import { useSideBarItemJugador } from "../hooks/views"

export const SideBarItemJugador = ({ jugador }) => {

    const { conquerGame } = useSideBarItemJugador()
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

                <ListItemText primary={
                    `${jugador.usuario} 
                ${jugador.turnoJugador === conquerGame.turnoJugador ? "(Tu)" : ""}
                ${conquerGame.estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO &&
                        !!jugador.listo ? "Listo" : ""
                    }
                `} />

            </Grid>
        </ListItem >
    )
}
