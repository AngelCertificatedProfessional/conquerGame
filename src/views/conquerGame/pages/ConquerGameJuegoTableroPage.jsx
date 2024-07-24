import { Box } from "@mui/material";
import { useConquerGameJuegoTableroPage } from "../hooks"
import { CuadroMapa, ListadoPiezas } from "../views"
import { DialogSeleccionarNuevaPieza, SideBarConquerGame } from "../components";
import { tamanoTableroY, tamanoTableroX } from "../../../types";
import { numeroAAlfabeto } from "../../../helpers";
import { validaInvacionTerreno4Jugadores } from "../../../helpers/conquerGame/validaPosicionPieza";
export const ConquerGameJuegoTableroPage = () => {

    const {
        conquerGame,
        drawerWidth,
        piezasJugador,
        habilitarOpcionAceptar,
        posicionesPiezaMoverse,
        posicionesPiezaDisparar,
        posicionPiezaSeleccionada,
        movioAsesino,
        tiempoTexto,
        mostrarVentanaPiezaEspecial,
        piezaEspecialSeleccionada,
        setListadoRef,
        handleClickTablero,
        handleClickPersonaje,
        handlePasarTurno,
        clickAceptarNuevaPieza,
    } = useConquerGameJuegoTableroPage()
    if (!!!piezasJugador) return <></>;

    return (
        <Box sx={{
            display: 'flex',
        }} >
            <SideBarConquerGame
                handleClick={handlePasarTurno}
                habilitarBoton={habilitarOpcionAceptar}
                mensajeBoton={movioAsesino ? `Finalizar Turno` : `Saltar Turno`}
                tiempoTexto={tiempoTexto}
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
                                let bAreaNoSeleccionable = false;
                                if (!!piezaEspecialSeleccionada && conquerGame.cantidadJugadores) {
                                    bAreaNoSeleccionable = validaInvacionTerreno4Jugadores(posicion, conquerGame.turnoJugador)
                                }
                                return (
                                    < CuadroMapa
                                        key={posicion}
                                        piezasJugador={conquerGame.posicionPiezasGlobal}
                                        posicion={posicion}
                                        handleClick={handleClickTablero}
                                        bAreaNoSeleccionable={bAreaNoSeleccionable}
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
            <DialogSeleccionarNuevaPieza
                mostrarVentana={mostrarVentanaPiezaEspecial}
                aceptarPieza={clickAceptarNuevaPieza}
            />
        </Box>
    )
}
export default ConquerGameJuegoTableroPage