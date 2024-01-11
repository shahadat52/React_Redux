import { configureStore } from "@reduxjs/toolkit";
import counterReduce from './features/CounterSlice'
import { Logger } from "./middleware/logger";
// import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: counterReduce
    },
    // devTools: false
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch