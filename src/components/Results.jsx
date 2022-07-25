import React from 'react'

import { useSearchSlice } from '../hooks'

export const Results = (  ) => {
    const { selectMovie1, selectMovie2, results, user} =  useSearchSlice()
    const handleSelectMovie =( movie ) =>{
        user === 1 ? selectMovie1( movie ) : selectMovie2( movie )
    }
    
    return (
        <div className='container'>
            <div className={`row justify-content-center mt-1 ${ results.length === 0 && 'd-none'}`}>
                <ul className="list-group col-9 mt-1 overflow-auto" style={{maxHeight: '500px'}}>
                    {
                        results?.map(movie =>(
                            <li
                                key={movie.id} 
                                className="list-group-item li-results"
                                onClick={() => handleSelectMovie( movie )}
                            >{ movie.title }</li>
                        ))
                    }
                </ul>

            </div>

        </div>
        
    )
}
