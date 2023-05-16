import {configureStore} from "@reduxjs/toolkit";
import {socialsReducer} from './socialsSlice'
import {stackReducer} from "./stackSlice";
import {portfolioReducer} from "./portfolioSlice";

export const store = configureStore({
    reducer: {
        socials: socialsReducer,
        stack: stackReducer,
        sites: portfolioReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch