import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
export const theme = createTheme({
    //Medidas por default de los breakpoints
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#262254",
            light: '#F5EBFF'
        },
        secondary: {
            main: "#543884"
        },
        error: {
            main: red.A400
        }
    }
})