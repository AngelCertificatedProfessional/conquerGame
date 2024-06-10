import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useStylesConquerGame } from "../../../types"

export const SideBarItemConquerGame = ({ jugador }) => {
    return (
        <ListItem disablePadding >
            <Grid container mt={2} p={2} sx={[useStylesConquerGame[`targetaJugador${jugador.turno}`]]}>
                <ListItemText primary={jugador.usuario} />
            </Grid>
        </ListItem >
    )
}
