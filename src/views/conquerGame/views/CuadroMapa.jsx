import { Box, Tooltip } from "@mui/material";
import { colorDisparo, colorLago, colorMontana, colorMovimientoOpciones, colorSeleccionadoTablero, colorTablero, lagosConquerGame, montanasConquerGame } from "../../../types";
import { useEffect, useState } from "react";

export const CuadroMapa = ({ posicion, handleClick,
    bAreaNoSeleccionable, posicionesPiezaMoverse,
    posicionesPiezaDisparar, posicionPiezaSeleccionada, piezasJugador }) => {

    const [imagen, setImagen] = useState('')
    useEffect(() => {
        const { direccion } = piezasJugador.find(piezasJugador => piezasJugador.posicion === posicion) || ''
        setImagen(!!direccion ? direccion : '')
    }, [piezasJugador])
    return (
        <Box
            sx={{
                width: 40,
                height: 40,
                backgroundColor:
                    posicionesPiezaMoverse.includes(posicion)
                        ? colorMovimientoOpciones : posicionPiezaSeleccionada === posicion
                            ? colorSeleccionadoTablero : posicionesPiezaDisparar.includes(posicion)
                                ? colorDisparo : montanasConquerGame.includes(posicion)
                                    ? colorMontana : lagosConquerGame.includes(posicion)
                                        ? colorLago : colorTablero,
                border: '1px',
                borderStyle: 'solid',
                opacity: bAreaNoSeleccionable ? "50%" : "100%"
            }}
            onClick={() => bAreaNoSeleccionable ? {} : handleClick(posicion)}
        >
            {imagen !== '' &&
                <Box
                    component="img"
                    height="100%"
                    width="100%"
                    src={imagen}
                />
            }
        </Box>
    );
}