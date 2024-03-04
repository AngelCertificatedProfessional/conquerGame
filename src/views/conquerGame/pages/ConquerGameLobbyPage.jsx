import { Container, Grid, Typography } from "@mui/material"
import { useConquerGameLobbyPage } from "../hooks"
import { ListaJugadores } from "../views/ListaJugadores"

export const ConquerGameLobbyPage = () => {

  const {conquerGame} = useConquerGameLobbyPage()

  return (
      <Container maxWidth="lg">
        <Typography variant="h4">
          Partida {conquerGame.numeroPartida}
        </Typography>
        <main>
        {/*
          <MainFeaturedPost post={mainFeaturedPost} />
        */}
          <Grid container spacing={4} mt={2}>
            {conquerGame.jugadores.map((jugador,index) => (
              <ListaJugadores key={jugador._id} jugador={jugador} index={index}/>
            ))}
          </Grid>
        </main>
      </Container>
  )
}

export default ConquerGameLobbyPage