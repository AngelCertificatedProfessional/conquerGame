import { Box, Card, CardActionArea, Grid } from "@mui/material";
import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { CuadroMapa, ListadoPiezas } from "../views"
import { SideBarConquerGame } from "../components";
import { tamanoTableroY, tamanoTableroX } from "../../../types";
import { numeroAAlfabeto } from "../../../helpers";
import { useCallback, useEffect, useRef, useState } from "react";
import { piezaInvadePosicionConfiguracion } from "../../../helpers/conquerGame/validaPosicionPieza";

export const ConquerGameJuegoPage = () => {

    const { conquerGame, drawerWidth } = useListadoPiezas()
    const [piezaSeleccionada, setPiezaSeleccionada] = useState()
    const [piezasJugador, setPiezasJugador] = useState([])
    const refs = useRef({});

    useEffect(() => {
        setPiezasJugador(conquerGame.piezas)
    }, [conquerGame])

    const handleClickPersonaje = (pieza) => {
        if (!!piezaSeleccionada && piezaSeleccionada.nombre === pieza.nombre) {
            setPiezaSeleccionada(null)
        } else {
            setPiezaSeleccionada(pieza)
        }
    }

    const handleClickTablero = (posicionPieza) => {
        if (!!!piezaSeleccionada) return
        let posicionVieja = null;

        if (piezaInvadePosicionConfiguracion(posicionPieza, piezaSeleccionada.nombre,
            conquerGame, piezasJugador)) return



        const nuevaPiezaJugador = piezasJugador.map((pieza) => {
            if (!!!posicionVieja && pieza.nombre === piezaSeleccionada.nombre && pieza.posicion !== '') {
                posicionVieja = pieza.posicion
            }
            return {
                ...pieza,
                posicion: pieza.nombre === piezaSeleccionada.nombre ? posicionPieza : pieza.posicion
            };
        })
        setPiezasJugador(nuevaPiezaJugador)
        if (!!posicionVieja) {
            const ref = refs.current[posicionVieja];
            if (ref) {
                ref.innerHTML = '';
            }
        }

        const ref = refs.current[posicionPieza];
        if (ref) {
            const pieza = nuevaPiezaJugador.find(p => p.posicion === posicionPieza);
            ref.innerHTML = pieza ? `<img src="${pieza.direccion}" alt="Pieza" style="width:100%; height:100%;" />` : '';
        }
    }

    const setCuadroRef = useCallback((node, posicion) => {
        if (node) {
            refs.current[posicion] = node;
        }
    }, []);

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
                            {[...Array(tamanoTableroY)].map((y, col) => {
                                const posicion = `${tamanoTableroX - row}${numeroAAlfabeto(col + 1)}`;
                                return (
                                    < CuadroMapa
                                        ref={node => setCuadroRef(node, posicion)}
                                        key={posicion}
                                        posicion={posicion}
                                        handleClick={handleClickTablero}
                                    />
                                )
                            }
                            )}
                        </Box>

                    )}
                </Box>
            </Box>
        </Box>
    )
}
export default ConquerGameJuegoPage