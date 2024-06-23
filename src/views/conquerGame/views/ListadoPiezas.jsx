import { Card, CardActionArea, CardMedia, Tooltip } from "@mui/material";
import { forwardRef } from "react";
export const ListadoPiezas = forwardRef(({ pieza, handleClick }, ref) => {
    return (
        <Tooltip title={pieza.icono} >
            <Card
                ref={ref}
                sx={{
                    width: 80,
                    flexGrow: { sm: 0 },
                    height: 80,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardActionArea onClick={() => handleClick(pieza)}>
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
)



