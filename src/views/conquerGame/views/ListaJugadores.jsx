import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useStylesConquerGame } from "../../../types";

export const ListaJugadores = ({ jugador, index }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={[useStylesConquerGame[`targetaJugador${jugador.turno}`], { display: 'flex' }]}>
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




