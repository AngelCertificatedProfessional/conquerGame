import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDialogOpen: false,
        isMenuOpen: false,
        isAlertasOpen: false,
        isDialogRecordatorioOpen: false,
        isCargando: false,
        errorMessage: ''
    },
    reducers: {
        onDialogOpen: (state) => {
            state.isDialogOpen = true;
        },
        onDialogClose: (state) => {
            state.isDialogOpen = false;
        },
        onMenuOpen: (state) => {
            state.isMenuOpen = true;
        },
        onMenuClose: (state) => {
            state.isMenuOpen = false;
        },
        onAlertasOpen: (state) => {
            state.isAlertasOpen = true;
        },
        onAlertasClose: (state) => {
            state.isAlertasOpen = false;
        },
        onRecordatoriosOpen: (state) => {
            state.isDialogRecordatorioOpen = true;
        },
        onRecordatoriosClose: (state) => {
            state.isDialogRecordatorioOpen = false;
        },
        onCargando: (state, { payload }) => {
            state.isCargando = payload;
        },
        onErrorMensaje: (state, { payload }) => {
            state.errorMessage = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onDialogOpen,
    onAlertasClose,
    onAlertasOpen,
    onDialogClose,
    onMenuClose,
    onMenuOpen,
    onRecordatoriosClose,
    onRecordatoriosOpen,
    onCargando,
    onErrorMensaje
} = uiSlice.actions;