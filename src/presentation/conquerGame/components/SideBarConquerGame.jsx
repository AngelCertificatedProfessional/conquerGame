import { useState } from "react"
import { Box, Button, Divider, List, Typography } from "@mui/material"
import { useSideBarConquerGame } from "../hooks"
import { SideBarItemJugador } from "../views"
import { CONQUERGAMEPARTIDA } from "../../../types"
import { DialogAyudaPersonajes } from "./DialogAyudaPersonajes"

const drawerWidth = '200px'
export const SideBarConquerGame = ({ handleClick, habilitarBoton, mensajeBoton, tiempoTexto }) => {
    const { conquerGame, iniciarPartida, user,
        mostraAyuda, setMostrarAyuda } = useSideBarConquerGame()

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
            <Typography variant='h6' noWrap component='div' mt={2}>
                Jugadores
            </Typography>
            <Divider />
            {
                habilitarBoton &&
                <Button variant="contained" onClick={() => handleClick()} fullWidth
                    sx={{ marginBottom: 1 }}>
                    {mensajeBoton}
                </Button>
            }
            {
                conquerGame.estatus === CONQUERGAMEPARTIDA.AGREGARPIEZASTABLERO &&
                conquerGame.jugadores.every(jugador => !!jugador.listo) &&
                conquerGame.usuario_id === user.uid
                &&
                <Button variant="contained" onClick={() => iniciarPartida()} fullWidth
                    sx={{ marginBottom: 1 }}>
                    Iniciar Partida
                </Button>
            }
            <Button variant="contained" onClick={() => setMostrarAyuda(true)} fullWidth >
                Ayuda
            </Button>
            <List>
                {
                    conquerGame.jugadores.map(jugador => (
                        < SideBarItemJugador
                            key={jugador._id}
                            jugador={jugador}
                        />
                    ))
                }
            </List>

            <DialogAyudaPersonajes
                mostraAyuda={mostraAyuda}
                setMostrarAyuda={setMostrarAyuda}
            />
        </Box >
    )
}
