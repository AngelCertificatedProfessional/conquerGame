import { Box, Tooltip } from "@mui/material";
import { COLORDISPARO, COLORLAGO, COLORMONTANA, COLORMOVIMIENTOOPCIONES, COLORSELECCIONADOTABLERO, COLORTABLERO, lagosConquerGame, montanasConquerGame } from "../../../types";
import { useEffect, useState } from "react";

export const CuadroMapa = ({ posicion, handleClick,
    bAreaNoSeleccionable, posicionesPiezaMoverse,
    posicionesPiezaDisparar, posicionPiezaSeleccionada, piezasJugador }) => {

    const [imagen, setImagen] = useState('')
    const [titulo, setTitulo] = useState('')
    useEffect(() => {
        const { direccion, titulo } = piezasJugador.find(piezasJugador => piezasJugador.posicion === posicion) || ''
        setImagen(!!direccion ? direccion : '')
        setTitulo(!!titulo ? titulo : '')
    }, [piezasJugador])
    return (
        <Box
            sx={{
                width: 40,
                height: 40,
                backgroundColor:
                    posicionesPiezaMoverse.includes(posicion)
                        ? COLORMOVIMIENTOOPCIONES : posicionPiezaSeleccionada === posicion
                            ? COLORSELECCIONADOTABLERO : posicionesPiezaDisparar.includes(posicion)
                                ? COLORDISPARO : montanasConquerGame.includes(posicion)
                                    ? COLORMONTANA : lagosConquerGame.includes(posicion)
                                        ? COLORLAGO : COLORTABLERO,
                border: '1px',
                borderStyle: 'solid',
                opacity: bAreaNoSeleccionable ? "50%" : "100%"
            }}
            onClick={() => bAreaNoSeleccionable ? {} : handleClick(posicion)}
        >
            {imagen !== '' &&
                <Tooltip title={titulo} PopperProps={{
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [0, 25],
                            },
                        },
                    ],
                }}>
                    <Box
                        component="img"
                        height="100%"
                        width="100%"
                        src={imagen}
                    />
                </Tooltip>
            }
        </Box>
    );
}