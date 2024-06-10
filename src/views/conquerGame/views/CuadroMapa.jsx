import { Box, Card, CardActionArea, CardMedia, Tooltip } from "@mui/material";
import { colorLago, colorMontana, colorTablero, lagosConquerGame, montanasConquerGame } from "../../../types";
import { useEffect, useState } from "react";

export const CuadroMapa = ({ posicion, handleClick, piezasJugador }) => {
    const [color, useColor] = useState(colorTablero)

    useEffect(() => {
        if (montanasConquerGame.includes(posicion)) {
            useColor(colorMontana)
        } else if (lagosConquerGame.includes(posicion)) {
            useColor(colorLago)
        }
    }, [])

    useEffect(() => {

    }, [piezasJugador])

    return (
        <Tooltip title={""} >
            <Box sx={{
                width: 40,
                height: 40,
                backgroundColor: color,
                border: '1px',
                borderStyle: 'solid'
            }}
                onClick={() => handleClick(posicion)}
            >
                {/* { } AQUI VA LA IMAGEN */}
            </Box>
        </Tooltip >
    );
}




