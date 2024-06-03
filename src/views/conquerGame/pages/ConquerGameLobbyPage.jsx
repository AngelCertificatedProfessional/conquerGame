import { useEffect } from "react"
import { Button, Container, Grid, Typography } from "@mui/material"
import { useConquerGameLobbyPage } from "../hooks"
import { ListaJugadores } from "../views/ListaJugadores"
import { useSocket } from "../../../hooks/useSocket";

export const ConquerGameLobbyPage = () => {

  const { conquerGame, startActualizarConquerGame,
    mostrarTableroSeleccion, user } = useConquerGameLobbyPage()
  const { socket, conectarSocket } = useSocket("http://localhost:8087")

  useEffect(() => {
    conectarSocket()
  }, [conectarSocket])
  //Eschucar los cambios en los usuarios conectados
  useEffect(() => {
    socket?.on('conquerGame' + conquerGame.numeroPartida, (conquerGameT) => {
      startActualizarConquerGame(conquerGameT)
    })
  }, [socket])

  return (
    <Container maxWidth="lg">
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant="h4">
          Partida {conquerGame.numeroPartida}
        </Typography>
        {
          /* Solo el jugador que creo la partida se le mostrara el boton*/
          conquerGame.usuario_id === user.uid &&
          <Button mt={4} variant="contained"
            onClick={mostrarTableroSeleccion}
            disabled={conquerGame.cantidadJugadores !== conquerGame.jugadores.length}>
            Iniciar
          </Button>
        }

      </Grid>
      <Grid container spacing={4} mt={1}>
        {conquerGame.jugadores.map((jugador, index) => (
          <ListaJugadores key={jugador._id} jugador={jugador} index={index} />
        ))}
      </Grid>
    </Container >
  )
}

export default ConquerGameLobbyPage