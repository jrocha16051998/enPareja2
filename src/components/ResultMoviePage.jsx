import React, {  useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux/es/exports'
import { useGetSimilarQuery } from '../store/apis/moviesApi'
import { addRecomendedMovie, addToArrayBase, onClear, onMatch, onNoRecomended } from '../store/searchSlice'
import { Header } from './Header'
import { ResultCard } from './ResultCard'
import { Spiner } from './Spiner'
import { onClearUi } from '../store/uiSclice'
import { Element } from 'react-scroll'
import { Info } from './Info'
import { BtnToTop } from './BtnToTop'
import { animateScroll as scroll} from 'react-scroll'



export const ResultMoviePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [page, setPage] = useState ( 1 )
    const { selectedMovie, arrayBase, recomendedMovie, match, noRecomended} = useSelector( state => state.search)
    const { user1, user2 }  = selectedMovie
    useEffect(() => {
        
        scroll.scrollToTop({duration: 20, smooth:true})
    
    }, [])
    
 

    useEffect(() => {
        
        if(Object.keys(user1).length === 0 || Object.keys(user2).length === 0 ) {
            dispatch( onClear() )
            dispatch( onClearUi())
            navigate('/')
        }else{
            
            if(user1.id === user2.id){
                dispatch(onMatch())
                dispatch(addRecomendedMovie(user1))
            }

        }
        
    
        
    }, [])


    
    let id = user1.id
    const { data: data1, isSuccess: isSuccess1} = useGetSimilarQuery({ id, page })
    
    id  = user2.id 
    const { data: data2 , isSuccess: isSuccess2} = useGetSimilarQuery({ id , page  })
    
    useEffect(() => {
        
        if( isSuccess1 && isSuccess2 && match === false && noRecomended === false){
           
            dispatch( addToArrayBase( data1.results ) )
            arrayBase.map( movie =>{
                data2.results.map( movie2 =>{
                    if( movie2.id === movie.id ){
                        dispatch( onMatch() )
                        dispatch( addRecomendedMovie( movie ))
                    }
                })
            })
            
            !match && setPage( page +1) 
        }
        
        page === 100  && dispatch( onNoRecomended() )
    }, [isSuccess1 ,isSuccess2])
    
   

   

    const handleBack = () =>{
        dispatch( onClear ())
        dispatch( onClearUi())
        navigate('/')
    }

    return (
        <>
            <Header />
            {
                !match && !noRecomended 
                && 
                <Spiner />
            }
            {
                match && 
                    <>
                        <ResultCard id={ recomendedMovie.id } page={page}/>
                        
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
        </>
    )
}
