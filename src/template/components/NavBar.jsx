import { LogoutOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, Grid, IconButton, Menu, Stack, Toolbar, Typography } from "@mui/material"
import { useUsuarioStore, } from "../../hooks";
// import { DIRECCIONAMIENTO } from "../../types/direccionamientoTypes";
// import { useState } from "react";
// import { MenuItemNabvar } from './MenuItemNabvar';

export const NavBar = () => {
    // const [anchorElNav, setAnchorElNav] = useState(null);
    // const [subMenu, setSubMenu] = useState(null);
    const { startLogout } = useUsuarioStore();
    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleOpenUserMenu = (event, subRutas) => {
    //     setAnchorElNav(event.currentTarget);
    //     setSubMenu(subRutas)
    // };


    return (
        <AppBar position="fixed" sx={{
            width: { sm: `calc(100%` },
            ml: { sm: `0px` },
            zIndex: 1100
        }}>
             <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={
                            {
                                mr: 2
                            }
                        }
                        >
                        Games Liuts
                    </Typography>
                    <Stack direction="row">
                        <IconButton color='error' onClick={startLogout} aria-label="cerrar">
                            <LogoutOutlined />
                        </IconButton>
                    </Stack> 
                </Grid>
            </Toolbar> 
        </AppBar >
    )
}
