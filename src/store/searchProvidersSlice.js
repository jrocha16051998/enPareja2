import { createSlice } from '@reduxjs/toolkit'


export const searchProvidersSlice = createSlice({
    name: 'searchProviders',
    initialState:{
        providersSearched: [],
        selectedProviders:[],

    },
    reducers: {
        onSearchProviders:( state, {payload} ) =>{
            state.providersSearched = payload
        },
        onSelectedProviders:( state, { payload }) =>{
            state.selectedProviders.push( payload )
        },
        onDelProviders:( state, { payload }) =>{
            state.selectedProviders.splice(payload,1)
        },

    },
})

// Action creators are generated for each case reducer function
export const { onSearchProviders, onSelectedProviders, onDelProviders } = searchProvidersSlice.actions