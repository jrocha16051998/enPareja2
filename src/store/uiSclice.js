import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        isConfirmed1 : false,
        isConfirmed2: false,
        isModalOpen:false,
    },
    reducers: {
        onConfirm1:( state ) =>{
            state.isConfirmed1 = !state.isConfirmed1
        },
        onConfirm2:( state ) =>{
            state.isConfirmed2 = !state.isConfirmed2
        },
        onModalChange:( state ) =>{
            state.isModalOpen = !state.isModalOpen
        },
        onClearUi:( state ) =>{
            state.isConfirmed1 = false
            state.isConfirmed2 = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { onConfirm1, onConfirm2, onModalChange, onClearUi} = uiSlice.actions