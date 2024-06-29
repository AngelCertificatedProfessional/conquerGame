import { Box, Tooltip } from "@mui/material";
import { colorLago, colorMontana, colorMovimientoOpciones, colorTablero, lagosConquerGame, montanasConquerGame } from "../../../types";
import { forwardRef } from "react";

export const CuadroMapa = forwardRef(({ posicion, handleClick, bAreaNoSeleccionable, posicionesPiezaMoverse }, ref) => {
    return (
        <Box
            ref={ref}
            sx={{
                width: 40,
                height: 40,
                backgroundColor:
                    posicionesPiezaMoverse.includes(posicion)
                        ? colorMovimientoOpciones : montanasConquerGame.includes(posicion)
                            ? colorMontana : lagosConquerGame.includes(posicion)
                                ? colorLago : colorTablero,
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