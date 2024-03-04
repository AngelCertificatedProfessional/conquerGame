import { Box, Toolbar } from "@mui/material";
import { NavBar } from "./components"

export const TemplateIndex = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} >
            <NavBar />

            <Box component='main' //Main
                sx={{
                    width: {
                        xs: `100%`
                    },
                    flexGrow: 1,
                    p: 3 //PADING GLOBAL
                }}
            >
                {/* da un salto de linea para el el hijo */}
                <Toolbar />
                {children}
            </Box>
        </Box >
    )
}
