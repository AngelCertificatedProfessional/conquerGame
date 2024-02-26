import { useDispatch, useSelector } from "react-redux"
import {
    onDialogClose,
    onDialogOpen,
    onMenuClose,
    onMenuOpen,
    onAlertasOpen,
    onAlertasClose,
    onRecordatoriosOpen,
    onRecordatoriosClose,
    onCargando,
    onErrorMensaje
} from "../store";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDialogOpen, isMenuOpen, isAlertasOpen,
        isDialogRecordatorioOpen, isCargando, errorMessage } = useSelector(state => state.ui);

    const openDialog = () => {
        dispatch(onDialogOpen())
    }

    const closeDialog = () => {
        dispatch(onDialogClose())
    }

    const openMenu = () => {
        dispatch(onMenuOpen())
    }

    const closeMenu = () => {
        dispatch(onMenuClose())
    }

    const openAlertas = () => {
        dispatch(onAlertasOpen())
    }

    const closeAlertas = () => {
        dispatch(onAlertasClose())
    }

    const toggleAlertas = () => {
        isAlertasOpen ? closeAlertas() : openAlertas()
    }

    const openRecordatorios = () => {
        dispatch(onRecordatoriosOpen())
    }

    const closeRecordatorios = () => {
        dispatch(onRecordatoriosClose())
    }

    const startCargando = (bMostrar) => {
        dispatch(onCargando(bMostrar))
    }

    const startMensajeError = (sMensajeError) => {
        dispatch(onErrorMensaje(sMensajeError))
    }

    return {
        //* Propiedades
        isAlertasOpen,
        isDialogOpen,
        isMenuOpen,
        isDialogRecordatorioOpen,
        isCargando,
        errorMessage,
        //* Metodos
        closeAlertas,
        closeDialog,
        closeMenu,
        closeRecordatorios,
        openAlertas,
        openDialog,
        openMenu,
        openRecordatorios,
        toggleAlertas,
        startCargando,
        startMensajeError
    }
}