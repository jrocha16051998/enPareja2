import React, { useEffect } from 'react'
import { Results } from '../Results'
import { Search } from '../Search'
import { Suggestions } from './Suggestions'
import { MovieCard } from './MovieCard'
import { MovieCard2 } from './MovieCard2'
import { useNavigate } from 'react-router-dom'

import { Element } from 'react-scroll'

import { useSearchSlice, useUiSlice } from '../../hooks'

export const Body = () => {
    const navigate = useNavigate()
    const { user : currentUser, selectedMovie } = useSearchSlice()
    const {  isConfirmed1, isConfirmed2 } = useUiSlice()

    useEffect(() => {
        
        isConfirmed1 && isConfirmed2 && navigate('./select-providers')
    
    }, [isConfirmed1, isConfirmed2])
    
    return (
        <div className='container'>
            <div className='row justify-content-between'> 
                <div className='col-lg-6 col-md-12'>
                    <h5 className='pt-5 text-center'>Humano 1, elige la película que quieras ver</h5>
                    <Element name='search1' >
                        <Search user={ 1 }/>
                    </Element>
                    {
                        currentUser === 1 && < Results user={ 1 } />
                    }
                    {
                        Object.keys(selectedMovie.user1).length > 0 &&  <MovieCard />
                    }
                </div>
                
                <div className='col-lg-6 col-md-12'>
                    <h5 className='pt-5 text-center'>Humano 2, elige la película que quieras ver</h5>
                    <Element name='search2' >
                        <Search user={ 2 } />
                    </Element>
                    
                    
                      
                    
                    
                    {
                        currentUser === 2 && < Results user={ 2 } />
                    }
                    {
                        Object.keys(selectedMovie.user2).length > 0 &&  <MovieCard2 />
                    }
                    
                    
                </div>
            </div>
            <hr />
            <Suggestions /> 

            
            
            
            


        </div>
    )
}
