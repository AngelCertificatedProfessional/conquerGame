import { Box, Card, CardActionArea, CardMedia, Tooltip } from "@mui/material";
import { colorLago, colorMontana, colorTablero, lagosConquerGame, montanasConquerGame } from "../../../types";
import { forwardRef, useEffect, useState } from "react";

export const CuadroMapa = forwardRef(({ posicion, handleClick }, ref) => {
    const [color, setColor] = useState(colorTablero)
    useEffect(() => {
        if (montanasConquerGame.includes(posicion)) {
            setColor(colorMontana)
        } else if (lagosConquerGame.includes(posicion)) {
            setColor(colorLago)
        }
    }, [])
    console.log(ref)
    return (
        <Tooltip title="{ }" >
            <Box
                ref={ref}
                sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: color,
                    border: '1px',
                    borderStyle: 'solid'
                }}
                onClick={() => handleClick(posicion)}
            >
                {/* {
                    imagen && <Box
                        component="img"
                        sx={{
                            height: 40,
                            width: 40,
                        }}
                        alt="Tablero"
                        src={imagen.direccion}
                    />
                } */}

            </Box>
        </Tooltip >
    );
}
)