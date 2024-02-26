import { createSlice } from '@reduxjs/toolkit';
import { USER_STATUS } from '../../types';

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        status: USER_STATUS.NOTAUTENTICATED,
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = USER_STATUS.CHECKING;
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = USER_STATUS.AUTENTICATED;
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = USER_STATUS.NOTAUTENTICATED;
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = usuarioSlice.actions;