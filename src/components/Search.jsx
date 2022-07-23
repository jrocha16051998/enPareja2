import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetSearchQuery } from '../store/apis/moviesApi'
import { onSearch } from '../store/searchSlice'




export const Search = ({ user }) => {
    const [toSearch, setToSearch] = useState('')
    const dispatch = useDispatch()
    const [formSearch, setFormSearch] = useState('')
    const { data = [] } = useGetSearchQuery(toSearch, { skip: toSearch.length < 1})
    const { results = [] } = data

    useEffect(() => {
        results.length > 1 && dispatch( onSearch( { results, user} ))
        
        
    }, [results])

    const handleInputChange = ({ target }) =>{
        setFormSearch(  target.value )
        
    }
    const handleSearch = async () =>{
        setToSearch( formSearch )
        
        dispatch( onSearch( { results, user} ))
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <input 
                    className="form-control m-2 w-50 col-xs-12 animate__animated animate__pulse" 
                    type="search" placeholder="Search" 
                    aria-label="Search"
                    name='search'
                    value={ formSearch }
                    onChange={ handleInputChange }
                    autoComplete='off'
                >
                
                </input>
                <button className="btn btn-outline-success w-25 h-25 col-xs-12 " type="submit" onClick={ handleSearch }>Search</button>
            </div>
        </div>
    )
}
