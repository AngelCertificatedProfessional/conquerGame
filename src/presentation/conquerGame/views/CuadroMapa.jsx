import { Box, Tooltip } from "@mui/material";
import {
    COLORDISPARO, COLORMOVIMIENTOOPCIONES,
    COLORSELECCIONADOTABLERO, lagosConquerGame, montanasConquerGame
} from "../../../types";
import { useEffect, useState } from "react";
import Tierra from '../../../images/conquerGame/escenario/tierra.png'
import Lago from '../../../images/conquerGame/escenario/lago.png'
import Montana from '../../../images/conquerGame/escenario/montana.png'
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
                border: '1px',
                borderStyle: 'solid',
                opacity: bAreaNoSeleccionable ? "50%" : "100%",
                background:
                    montanasConquerGame.includes(posicion) ? `url(${Montana})` :
                        lagosConquerGame.includes(posicion) ?
                            `url(${Lago})` : `url(${Tierra})`

            }}
            onClick={() => bAreaNoSeleccionable ? {} : handleClick(posicion)}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    backgroundColor:
                        posicionesPiezaMoverse.includes(posicion)
                            ? COLORMOVIMIENTOOPCIONES : posicionPiezaSeleccionada === posicion
                                ? COLORSELECCIONADOTABLERO : posicionesPiezaDisparar.includes(posicion)
                                    ? COLORDISPARO : '',

                }}
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
                            sx={{ opacity: "100%" }}
                            component="img"
                            height="100%"
                            width="100%"
                            src={imagen}
                        />
                    </Tooltip>
                }
            </Box>
        </Box>
    );
}