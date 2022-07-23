import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './apis/moviesApi'
import { searchProvidersSlice } from './searchProvidersSlice'
import { searchSlice } from './searchSlice'
import { uiSlice } from './uiSclice'

export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        search: searchSlice.reducer,
        searchProviders: searchProvidersSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})