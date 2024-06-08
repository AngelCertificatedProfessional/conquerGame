import { Card, CardActionArea, CardMedia, Grid, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
export const ListadoPiezas = ({ pieza }) => {
    // const [image, setImage] = useState(null)
    // console.log(pieza)
    // const fetchImage = async () => {
    //     try {
    //         const response = await import(`../../../images/conquerGame/${pieza.nombre}.png`) // change relative path to suit your needs
    //         setImage(response.default)
    //     } catch (err) {
    //     } finally {
    //     }
    // }

    // useEffect(() => {
    //     fetchImage()
    // }, [])
    return (
        <Tooltip title={pieza.icono} >
            <Card
                sx={{ width: 80, flexGrow: { xs: 1, sm: 0 }, height: 80, display: 'flex', flexDirection: 'column' }}
            >
                <CardActionArea >
                    <CardMedia
                        height="80"
                        width="80"
                        component="img"
                        image={pieza.direccion}
                    />
                </CardActionArea>
            </Card>
        </Tooltip>


    );
}




