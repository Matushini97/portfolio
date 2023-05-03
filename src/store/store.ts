import {configureStore} from "@reduxjs/toolkit";
import {socialsReducer} from './socialsSlice'

export const store = configureStore({
    reducer: {
        socials: socialsReducer
    }
})