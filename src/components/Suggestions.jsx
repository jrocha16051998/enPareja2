import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { scroller } from 'react-scroll'
import { useGetPopularQuery } from '../store/apis/moviesApi'
import { onSelectMovie1, onSelectMovie2 } from '../store/searchSlice'

export const Suggestions = () => {
    const dispatch = useDispatch()
    const { selectedMovie } = useSelector ( state => state.search )
    const { data = [], } = useGetPopularQuery() 
    const { results = [] }  = data
    
    const handleClickMovie = (movie) =>{
        if(Object.keys(selectedMovie.user1).length === 0) {
            dispatch( onSelectMovie1( {movie} ))
            scroller.scrollTo('search1')
            
        }else{
            dispatch( onSelectMovie2( {movie} ))
            scroller.scrollTo('search2')
        }
    }
    return (
        <div className='container'>
            <h4 className='pt-4 text-center'>Populares de hoy</h4>
            <div className="row pt-2 m-1 justify-content-center ">
                
                { 
                    results.map( movie =>(
                        <div key={movie.id} className="card col-lg-2 col-md-3 col-sm-4 m-2 p-0 shadow-lg" onClick={()=>  handleClickMovie(movie) }>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img " alt={movie.title} />
                            <div className="card-body">
                                <strong className="card-title">{movie.title}</strong>
                                
                                <p className="card-text"><small className="text-muted">Rating: {movie.vote_average}</small></p>
                            </div>
                        </div>
                    ))

                }
            
    
    
            </div>
            
        </div>
    )
}
