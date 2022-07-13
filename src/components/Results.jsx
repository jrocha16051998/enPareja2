import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import { onSelectMovie1, onSelectMovie2 } from '../store/searchSlice'

export const Results = (  ) => {
    const { results = [], user}  = useSelector( state => state.search)
    const dispatch = useDispatch()
    const handleSelectMovie =( movie ) =>{
        dispatch( user === 1 ? onSelectMovie1( {movie} ) : onSelectMovie2( {movie} ))
    }
    
    return (
        <div className='container'>
            <div className={`row justify-content-center mt-1 ${ results.length === 0 && 'd-none'}`}>
                <ul className="list-group col-9 mt-1 overflow-auto" style={{maxHeight: '500px'}}>
                    {
                        results.map(movie =>(
                            <li
                                key={movie.id} 
                                className="list-group-item"
                                onClick={() => handleSelectMovie( movie )}
                            >{ movie.title }</li>
                        ))
                    }
                </ul>

            </div>

        </div>
        
    )
}
