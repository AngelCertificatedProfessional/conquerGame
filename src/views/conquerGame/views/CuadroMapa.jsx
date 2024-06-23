import { Box, Tooltip } from "@mui/material";
import { colorLago, colorMontana, colorTablero, lagosConquerGame, montanasConquerGame } from "../../../types";
import { forwardRef } from "react";

export const CuadroMapa = forwardRef(({ posicion, handleClick, bAreaNoSeleccionable }, ref) => {
    return (
        <Box
            ref={ref}
            sx={{
                width: 40,
                height: 40,
                backgroundColor: montanasConquerGame.includes(posicion) ? colorMontana : lagosConquerGame.includes(posicion) ? colorLago : colorTablero,
                border: '1px',
                borderStyle: 'solid',
                opacity: bAreaNoSeleccionable ? "50%" : "100%"
            }}
            onClick={() => bAreaNoSeleccionable ? {} : handleClick(posicion)}
        >
        </Box>
    );
}
)