import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search_reducer";

export const store = configureStore({
    reducer: {
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch