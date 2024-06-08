import { Grid, ListItem, ListItemButton, ListItemText } from "@mui/material"

export const SideBarItemConquerGame = ({ jugador }) => {
    console.log(jugador)
    return (
        <ListItem disablePadding>
            <Grid container p={2}>
                <ListItemText primary={jugador.usuario} />
            </Grid>
        </ListItem>
    )
}
