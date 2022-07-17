import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({

    reducerPath:'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3'
    }),
    endpoints: (builder) =>({

        getPopular: builder.query({
            query: ()=> '/movie/popular?api_key=a30e7af22666dc349879f045ce0a98fd&language=es-ES'
        }), 
        getSearch: builder.query({
            query: ( search ) => `/search/movie?api_key=a30e7af22666dc349879f045ce0a98fd&language=es-ES&query=${search}`
        }),
        getMovieById: builder.query({
            query: ( id )=> `/movie/${id}?api_key=a30e7af22666dc349879f045ce0a98fd&language=es-ES`
        }),
        getSimilar: builder.query({
            query: ({ id , page =1} )=> `/movie/${id}/similar?api_key=a30e7af22666dc349879f045ce0a98fd&language=es-ES&page=${ page }`
        }),
        getProviders: builder.query({
            query: ( id  )=> `/movie/${id}/watch/providers?api_key=a30e7af22666dc349879f045ce0a98fd`
        }),
        getDiscover: builder.query({
            query: ({genresIds, optionsToWatch} )=> `/movie?api_key=a30e7af22666dc349879f045ce0a98fd&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${optionsToWatch}&with_genres=${genresIds}`
        }),

    })
})
export const { useGetPopularQuery, useGetMovieByIdQuery, useGetSearchQuery, useGetSimilarQuery, useGetProvidersQuery} = movieApi

