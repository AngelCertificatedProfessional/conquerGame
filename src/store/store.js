import { configureStore } from "@reduxjs/toolkit";
import {
    uiSlice,
    usuarioSlice,
    conquerGameSlice,
    socketSlice
} from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        usuario: usuarioSlice.reducer,
        conquerGame: conquerGameSlice.reducer,
        socket: socketSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})