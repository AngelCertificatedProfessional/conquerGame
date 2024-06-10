import { Box, Divider, List, Typography } from "@mui/material"
import { useSideBarConquerGame } from "../hooks/useSideBarConquerGame"
import { SideBarItemConquerGame } from "../views"

const drawerWidth = '200px'
export const SideBarConquerGame = () => {
    const { conquerGame } = useSideBarConquerGame()
    return (
        <Box
            component="nav"
            sx={{ zIndex: 1099, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }
            }
        >
            <Typography variant='h6' noWrap component='div'>
                Jugadores
            </Typography>
            <Divider />
            <List>
                {
                    conquerGame.jugadores.map(jugador => (
                        < SideBarItemConquerGame key={jugador._id} jugador={jugador} />
                    ))
                }
            </List>
        </Box >
    )
}
