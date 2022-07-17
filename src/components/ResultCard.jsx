import React from 'react'
    
import { useDispatch } from 'react-redux'
import { useGetMovieByIdQuery } from '../store/apis/moviesApi'
import { onModalChange } from '../store/uiSclice'
import { ModalProvider } from './ModalProviders'
import { Spiner } from './Spiner'

export const ResultCard = ( {id, page} ) => {
    const dispatch = useDispatch()
    const { data, isLoading, isSuccess } = useGetMovieByIdQuery( id )
    const recomendationLvl = (100 - page) 
    const handleOpenModal = () =>{
        dispatch( onModalChange() )
    }
    
    return (
        <>
            {
                isLoading && <Spiner />
            }

            {
                isSuccess 
                &&
                    
                <div className="card m-auto w-75 mt-5 mb-5 shadow-lg card-result animate__animated animate__pulse">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="img-fluid rounded-start h-100 w-100 " alt= { data.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{data.title}</h3>
                                <p>Fecha de estreno: {data.release_date}</p>
                                <p className="card-text">{data.overview}</p>
                                <strong>Géneros</strong>
                                <ul>
                                    {
                                        data.genres.map( gen =>(
                                            <li key={gen.id}>{gen.name}</li>
                                        ))
                                    }
                                </ul>
                                <strong> País/es</strong>
                                <ul>
                                    {
                                        data.production_countries.map( country =>(
                                            <li key={country.name}>{country.name}</li>
                                        ))
                                    }
                                </ul>
                                
                                <h5 className={`
                                    ${recomendationLvl > 79 
                                        ? 'recomendation-text-high' 
                                        : recomendationLvl < 79 
                                        && recomendationLvl > 20 
                                        ?  'recomendation-text-mid' 
                                        : recomendationLvl < 21 && 'recomendation-text-low' }
                                     `}> 
                                    {recomendationLvl}% recomendado </h5>
                            
                                    
                                <button 
                                    className='btn btn-primary mt-2' 
                                    onClick={ handleOpenModal }
                                >¿Dónde ver?</button>
                                
                            </div>
                        </div>
                    </div>
                    <ModalProvider id={ data.id } />
                </div>

            }
            



        </>
    )
}
