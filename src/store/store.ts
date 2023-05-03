import {configureStore} from "@reduxjs/toolkit";
import {socialsReducer} from './socialsSlice'
import {stackReducer} from "./stackSlice";

export const store = configureStore({
    reducer: {
        socials: socialsReducer,
        stack: stackReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch