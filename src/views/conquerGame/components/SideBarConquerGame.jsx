import { Box, Button, Divider, List, Typography } from "@mui/material"
import { useSideBarConquerGame } from "../hooks"
import { SideBarItemConquerGame } from "../views"
import { CONQUERGAMEPARTIDA } from "../../../types"

const drawerWidth = '200px'
export const SideBarConquerGame = ({ handleClick, habilitarBoton, mensajeBoton, tiempoTexto }) => {
    const { conquerGame, iniciarPartida, user } = useSideBarConquerGame()
    return (
        <Box
            component="nav"
            sx={{ zIndex: 1099, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }
            }
        >
            {
                tiempoTexto !== '' &&
                <Typography variant='h6' noWrap component='div'>
                    Tiempo: {tiempoTexto}
                </Typography>

            }
            {
                habilitarBoton &&
                <Button variant="contained" onClick={() => handleClick()} fullWidth >
                    {mensajeBoton}
                </Button>
            }
            <Typography variant='h6' noWrap component='div' mt={2}>
                Jugadores
            </Typography>
            <Divider />
            {
                conquerGame.estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO &&
                conquerGame.jugadores.every(jugador => !!jugador.listo) &&
                conquerGame.usuario_id === user.uid &&
                <Button variant="contained" onClick={() => iniciarPartida()} fullWidth >
                    Iniciar Partida
                </Button>
            }
            <List>
                {
                    conquerGame.jugadores.map(jugador => (
                        < SideBarItemConquerGame
                            key={jugador._id}
                            jugador={jugador}
                            estatus={conquerGame.estatus}
                        />
                    ))
                }
            </List>
        </Box >
    )
}
