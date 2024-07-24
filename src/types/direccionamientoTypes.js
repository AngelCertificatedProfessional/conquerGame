import { ConquerGameRoutes } from "../presentation/conquerGame/routes/ConquerGameRoutes"
import {
    CalendarMonth,
} from "@mui/icons-material"

export const DIRECCIONAMIENTO = Object.freeze([
    {
        juego: true,
        newTitle: 'ConquerGame',
        icono: CalendarMonth,
        ruta: '/conquerGame',
        proceso: ConquerGameRoutes
    },
])
