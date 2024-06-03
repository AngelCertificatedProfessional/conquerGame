import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const useStyles = {
  targetaJugador0: {
    backgroundColor: "rgb(245, 167, 49)",
    color: "#242020"
  },
  targetaJugador1: {
    backgroundColor: "rgb(14, 13, 13)",
    color: "#ebe5e5"
  },
  targetaJugador2: {
    backgroundColor: "rgb(218, 22, 22)",
    color: "#ebe5e5"
  },
  targetaJugador3: {
    backgroundColor: "rgb(129, 8, 153)",
    color: "#ebe5e5"
  },
  targetaJugador4: {
    backgroundColor: "rgb(14, 95, 48)",
    color: "#ebe5e5"
  },
  targetaJugador5: {
    backgroundColor: "rgb(255, 251, 0)",
    color: "#050505"
  }
}

export const ListaJugadores = ({ jugador, index }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={[useStyles[`targetaJugador${index}`], { display: 'flex' }]}>
          <CardContent sx={{ flex: 1 }} >
            <Typography component="h2" variant="h5">
              {jugador.usuario}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {jugador.nombre}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Puntuaje {jugador.puntuaje}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random?wallpapers"
            alt="green iguana"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}




