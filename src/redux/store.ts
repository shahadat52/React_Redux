import { configureStore } from "@reduxjs/toolkit";
import counterReduce from './features/CounterSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: counterReduce
    },
    // devTools: false
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch