import { configureStore } from "@reduxjs/toolkit";
import {
    uiSlice,
    usuarioSlice,
    conquerGameSlice
} from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        usuario: usuarioSlice.reducer,
        conquerGame: conquerGameSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})