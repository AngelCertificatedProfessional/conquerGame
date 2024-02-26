import { configureStore } from "@reduxjs/toolkit";
import {
    uiSlice,
    usuarioSlice,
} from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        usuario: usuarioSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})