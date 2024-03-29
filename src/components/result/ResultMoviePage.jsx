import React, {  useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/exports'
import { useGetDiscoverQuery,} from '../../store/apis/moviesApi'
import { ResultCard } from './ResultCard'
import { Spiner } from '../Spiner'
import { animateScroll as scroll} from 'react-scroll'
import { useSearchSlice, useUiSlice } from '../../hooks'
import { Layout } from '../../Layout/layout'

let genresToAdd = []


export const ResultMoviePage = () => {
    const {selectedMovie, recomendedMovie, match, noRecomended, genresIds,indexMovie, addRecomended, onCallMatch, clear, editGenres, onCallNoRecomended} = useSearchSlice ()
    const navigate = useNavigate()
    
    const { clearUi } = useUiSlice()
    const { user1, user2 }  = selectedMovie
    const { genre_ids} = user1
    const { genre_ids : genre_ids2} = user2
    const { selectedProviders } = useSelector( state => state.searchProviders)
    const providers = selectedProviders.map( provider => provider.provider_id).join('|')

    useEffect(() => {
        scroll.scrollToTop({duration: 20, smooth:true})
        if(Object.keys(user1).length === 0 || Object.keys(user2).length === 0 ) {
            clear()
            clearUi()
            navigate('/')
                

        }else{
            if(user1.id === user2.id){
                onCallMatch()
                addRecomended(user1)
            }
        }
    }, [])

    useEffect(() => {
        
        genre_ids?.map(id =>{
            !genre_ids2.includes(id) && genresToAdd.push(id)
        })
        genre_ids2?.map( id =>{
            !genre_ids.includes(id) && genresToAdd.push(id)
        })
        genresToAdd.length > 0 && editGenres( genresToAdd.toString() )
        
        
    }, [])
    
    const { data, isSuccess,} =  useGetDiscoverQuery({genresIds, providers},{ skip: genresIds.length === 0})
   
    
    
    
    useEffect(() => {
        
        if(data?.results?.length > 0 ){
            addRecomended( data.results[indexMovie])
            onCallMatch()
            
            
        }else if( !match && isSuccess){
            genresToAdd.pop()
            editGenres ( genresToAdd.toString() ) 
        }

        if( genresToAdd.length === 0 && isSuccess){
            onCallNoRecomended()
        }
    }, [data, indexMovie])

    const handleBack = () =>{
        clear()
        clearUi()
        navigate('/')
    }

    return (
        <Layout>
            <>
        
                {
                    !match && !noRecomended
                    && 
                    <Spiner />
                }
                {
                    match && 
                        <>
                            <ResultCard id={ recomendedMovie.id } results={data?.results}/>
                            
                        </>
                        
                }
                {
                    noRecomended && 
                        <div className='container mb-3'>

                            <div className='row justify-content-center'>
                                <h5 className='ml-4 p-5 text-center '>No se ha encontrado ninguna recomendación, por favor intentelo nuevamente con otras peliculas</h5>
                                <button className='btn btn-outline-success w-25 h-25' onClick={ handleBack }> Volver </button>
                            </div>
                            
                        </div>
                }
                
            </>


        </Layout>
        
    )
}
