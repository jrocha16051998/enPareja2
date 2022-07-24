import React, {  useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux/es/exports'
import { useGetDiscoverQuery,} from '../store/apis/moviesApi'
import { addRecomendedMovie, onClear, onEditGenresIds, onMatch,} from '../store/searchSlice'
import { Header } from './Header'
import { ResultCard } from './ResultCard'
import { Spiner } from './Spiner'
import { onClearUi } from '../store/uiSclice'
import { Element } from 'react-scroll'
import { Info } from './Info'
import { BtnToTop } from './BtnToTop'
import { animateScroll as scroll} from 'react-scroll'
import { Footer } from './Footer'

let genresToAdd = []


export const ResultMoviePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedMovie, recomendedMovie, match, noRecomended, genresIds,} = useSelector( state => state.search)
    const { user1, user2 }  = selectedMovie
    const { genre_ids} = user1
    const { genre_ids : genre_ids2} = user2
    const { selectedProviders } = useSelector( state => state.searchProviders)
    //const optionsToWatch = '&with_watch_monetization_types=flatrate,buy,rent'
    const providers = selectedProviders.map( provider => provider.provider_id).join('|')

    useEffect(() => {
        scroll.scrollToTop({duration: 20, smooth:true})
        if(Object.keys(user1).length === 0 || Object.keys(user2).length === 0 ) {
            dispatch( onClear() )
            dispatch( onClearUi())
            navigate('./')

        }else{
            if(user1.id === user2.id){
                dispatch(onMatch())
                dispatch(addRecomendedMovie(user1))
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
        genresToAdd.length > 0 && dispatch( onEditGenresIds( genresToAdd.toString() ))
        
        
    }, [])
    
    const { data, isSuccess,} = useGetDiscoverQuery({genresIds, providers},{ skip: genresIds.length === 0})
   
    
    
    
    useEffect(() => {
        
        if(data?.results?.length > 0 ){
            dispatch( addRecomendedMovie( data.results[0]))
            dispatch( onMatch())
            
            
        }else   if( !match && isSuccess ){
            
            genresToAdd.pop()
            
            dispatch(onEditGenresIds ( genresToAdd.toString() ))
           
        }
        

    }, [data])

    const handleBack = () =>{
        dispatch( onClear ())
        dispatch( onClearUi())
        navigate('/')
    }

    return (
        <>
            <Header />
            {
                !match 
                && 
                <Spiner />
            }
            {
                match && 
                    <>
                        <ResultCard id={ recomendedMovie.id } />
                        
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
            
            <BtnToTop />
            <Element name='info'>
                <Info />
            </Element>
            <Footer/>
        </>
    )
}
