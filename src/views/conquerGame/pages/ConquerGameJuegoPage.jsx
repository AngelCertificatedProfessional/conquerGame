import { Box, Card, CardActionArea, Grid } from "@mui/material";
import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { CuadroMapa, ListadoPiezas } from "../views"
import { SideBarConquerGame } from "../components";
import { tamanoTableroY, tamanoTableroX } from "../../../types";
import { numeroAAlfabeto } from "../../../helpers";
import { useEffect, useState } from "react";

export const ConquerGameJuegoPage = () => {

    const { conquerGame, drawerWidth } = useListadoPiezas()
    const [piezaSeleccionada, setPiezaSeleccionada] = useState()
    const [piezasJugador, setPiezasJugador] = useState([])

    useEffect(() => {
        setPiezasJugador(conquerGame.piezas)
    }, [conquerGame])

    const handleClickPersonaje = (pieza) => {
        if (!!piezaSeleccionada) {
            setPiezaSeleccionada(null)
        } else {
            setPiezaSeleccionada(pieza)
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (!!!piezaSeleccionada) return
        const nuevaPiezaJugador = piezasJugador.map((pieza) => {
            return {
                ...pieza,
                posicion: pieza.nombre === piezaSeleccionada.nombre ? posicionPieza : pieza.posicion
            };
        })
        setPiezasJugador(nuevaPiezaJugador)
    }

    if (!!!piezasJugador) return <></>;


    return (

        <Box sx={{
            display: 'flex',
        }} >
            <SideBarConquerGame />
            {/* necesario para mostrar el lado derecho de la pantalla */}
            <Box component='main' //Main
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                    },
                    flexGrow: 1,
                    p: 3
                }}
            >
                {/* necesario para la divicion de las columnas */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    {
                        piezasJugador.map((pieza) =>
                            < ListadoPiezas
                                pieza={pieza}
                                key={pieza.nombre}
                                handleClick={handleClickPersonaje}
                            />
                        )
                    }
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {[...Array(tamanoTableroX)].map((x, row) =>
                        <Box key={`row${tamanoTableroX - (row)}`} sx={{ display: 'flex', flexDirection: 'row' }}>
                            {[...Array(tamanoTableroY)].map((y, col) =>
                                < CuadroMapa
                                    key={`${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`}
                                    posicion={`${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`}
                                    handleClick={handleClickTablero}
                                    piezasJugador={piezasJugador}
                                />
                                // <li id={`${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`} className={lagos.includes(`${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`) ? "box blue-box" : montanas.includes(`${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`) ? "box green-box" : "box white-box"}>

                                // </li>
                            )}
                        </Box>

                    )}
                </Box>
            </Box>
        </Box>
    )
}
export default ConquerGameJuegoPage