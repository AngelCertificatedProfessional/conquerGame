import { Box, CircularProgress } from '@mui/material';
import { useUiStore } from '../../../hooks';

export const Cargando = () => {
    const { isCargando } = useUiStore();
    if (!!!isCargando) return (<></>)
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute', // Para posicionar el CircularProgress de manera absoluta con respecto a este contenedor
                minHeight: '100px', // Ajusta la altura mínima para evitar que el contenedor se colapse cuando CircularProgress no está presente
            }}
        >
            <CircularProgress />
        </Box>
    )
}