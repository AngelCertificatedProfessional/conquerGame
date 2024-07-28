import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Targeta1 from "../../../images/conquerGame/targetas/targeta1.png"
import Targeta2 from "../../../images/conquerGame/targetas/targeta2.png"
import Targeta3 from "../../../images/conquerGame/targetas/targeta3.png"
import Targeta4 from "../../../images/conquerGame/targetas/targeta4.png"

export const ListaJugadores = ({ jugador, index }) => {
  console.log(index)
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={[{ display: 'flex' }]}>
          <CardContent sx={{ flex: 1 }} >
            <Typography component="h2" variant="h5">
              {jugador.usuario}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {jugador.nombre}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image={index === 0 ? Targeta1 : index === 1 ? Targeta2 : index === 2 ? Targeta3 : Targeta4}
            alt="TARGETA"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}




