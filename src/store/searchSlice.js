import { createSlice } from '@reduxjs/toolkit'


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: [],
        user: 1,
        selectedMovie: { user1: {}, user2: {} },
        isSelected: false,
        recomendedMovie: {},
        match: false,
        noRecomended: false,
        genresIds: '',
        indexMovie: 0
    },
    reducers: {
        onSearch: (state, { payload }) => {
            state.results = payload.results,
            state.user = payload.user
            state.isSelected = false
        },
        onSelectMovie1: (state, { payload }) => {
            state.selectedMovie.user1 = { ...payload.movie }
            state.results = []
            state.isSelected = true
        },
        onSelectMovie2: (state, { payload }) => {
            state.selectedMovie.user2 = { ...payload.movie }
            state.results = []
            state.isSelected = true
        },
        addRecomendedMovie: (state, { payload }) => {
            state.recomendedMovie = payload
        },
        onMatch: (state) => {
            state.match = true
        },
        onNoRecomended: (state) => {
            state.noRecomended = true
        },
        onClear: (state) => {
            state.noRecomended = false
            state.isSelected = false
            state.selectedMovie.user1 = {}
            state.selectedMovie.user2 = {}
            state.match = false
            state.arrayBase = []
            state.genresIds = ''
            state.recomendedMovie = {}
            state.dataIsLoaded = false
            state.providersSearched = []
            state.noRecomended = false
            state.indexMovie = 0
        },
        onEditGenresIds: (state, {payload} ) => {
            state.genresIds = payload
        },
        onAddIndexMovie: ( state ) =>{
            state.indexMovie ++
        }

    },
})

// Action creators are generated for each case reducer function
export const { 
    onSearch, 
    onSelectMovie1, 
    onSelectMovie2, 
    addToArrayBase, 
    addRecomendedMovie, 
    onMatch, 
    onNoRecomended, 
    onClear, 
    onEditGenresIds,
    onAddIndexMovie
} = searchSlice.actions