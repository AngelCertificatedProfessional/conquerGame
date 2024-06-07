import { Box, Grid } from "@mui/material";
import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { ListadoPiezas } from "../views"

export const ConquerGameJuegoPage = () => {

    const { conquerGame } = useListadoPiezas()

    if (!!!conquerGame.piezas) return <></>;

    return (
        <>
            <Box Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                    },
                }}
            >
                {
                    conquerGame.piezas.map((pieza) =>
                        < ListadoPiezas pieza={pieza} />
                    )
                }
            </Box>
        </>
        // <Grid container direction='row'>
        // </Grid>
    )
}
export default ConquerGameJuegoPage