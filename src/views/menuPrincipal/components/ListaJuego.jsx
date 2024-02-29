import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from "react-router-dom"

export const ListaJuego = ({ juego }) => {
    if(!juego.juego) return(<></>)
    return (
        <Card
            sx={{ maxWidth: { xs: '100%', sm: 170 }, flexGrow: { xs: 1, sm: 0 }, height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardActionArea component={Link} to={juego.ruta}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random?wallpapers"
                    alt="green iguana"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {juego.newTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
