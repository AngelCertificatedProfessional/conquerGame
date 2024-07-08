import { Box } from "@mui/material";
import { useConquerGameJuegoTableroPage } from "../hooks"
import { CuadroMapa, ListadoPiezas } from "../views"
import { SideBarConquerGame } from "../components";
import { tamanoTableroY, tamanoTableroX } from "../../../types";
import { numeroAAlfabeto } from "../../../helpers";
export const ConquerGameJuegoTableroPage = () => {

    const {
        conquerGame,
        drawerWidth,
        piezasJugador,
        habilitarOpcionAceptar,
        posicionesPiezaMoverse,
        posicionesPiezaDisparar,
        posicionPiezaSeleccionada,
        setListadoRef,
        handleClickTablero,
        handleClickPersonaje,
        aceptarPartida,
    } = useConquerGameJuegoTableroPage()
    if (!!!piezasJugador) return <></>;

    return (

        <Box sx={{
            display: 'flex',
        }} >
            <SideBarConquerGame
                handleClick={aceptarPartida}
                habilitarOpcionAceptar={habilitarOpcionAceptar}
            />
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
                                ref={node => setListadoRef(node, pieza.nombre)}
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
                                        key={posicion}
                                        piezasJugador={conquerGame.posicionPiezasGlobal}
                                        posicion={posicion}
                                        handleClick={handleClickTablero}
                                        bAreaNoSeleccionable={false}
                                        posicionesPiezaMoverse={posicionesPiezaMoverse}
                                        posicionesPiezaDisparar={posicionesPiezaDisparar}
                                        posicionPiezaSeleccionada={posicionPiezaSeleccionada}
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
export default ConquerGameJuegoTableroPage