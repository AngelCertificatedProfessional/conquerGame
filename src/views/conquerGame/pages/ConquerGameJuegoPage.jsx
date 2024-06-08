import { Box, Grid } from "@mui/material";
import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { ListadoPiezas } from "../views"
import { SideBarConquerGame } from "../components";

export const ConquerGameJuegoPage = () => {

    const { conquerGame } = useListadoPiezas()

    if (!!!conquerGame.piezas) return <></>;

    return (

        <Box sx={{
            display: 'flex',
        }} >
            <SideBarConquerGame>
                {/* <Stack mt={2} direction="row" >
                    <Button variant="contained" margin="normal" fullWidth onClick={handleAgregarKey}> Key</Button>
                </Stack>
                <Stack mt={2} direction="row" >
                    <Button variant="contained" margin="normal" fullWidth onClick={handleAgregarHkey}> HKey</Button>
                </Stack> */}
            </SideBarConquerGame >
            {/* 
            <Box component='main' //Main
                sx={{
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`,
                        // xs: `100%`
                    },
                    flexGrow: 1,
                    p: 3 //PADING GLOBAL
                }}
            >
                <ConexionRedisInfo />
                <ConexionRedisAM />
                <ConexionRedisHSET />
            </Box> */}
        </Box>


        // <>
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexWrap: 'wrap',
        //             '& > :not(style)': {
        //                 m: 1,
        //             },
        //         }}
        //     >
        //         {
        //             conquerGame.piezas.map((pieza) =>
        //                 < ListadoPiezas pieza={pieza} key={pieza.nombre} />
        //             )
        //         }
        //     </Box>
        //     <Grid container direction='row'>
        //         <Grid item>

        //         </Grid>
        //     </Grid>
        // </>
    )
}
export default ConquerGameJuegoPage