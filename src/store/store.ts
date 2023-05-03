import {configureStore} from "@reduxjs/toolkit";
import {socialsReducer} from './socialsSlice'

export const store = configureStore({
    reducer: {
        socials: socialsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch