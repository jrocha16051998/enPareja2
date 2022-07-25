import React, { useState } from 'react'
import { useSearchSlice, useUiSlice } from '../hooks'

export const MovieCard = () => {
    
    const { confirm1, isConfirmed1 } = useUiSlice()
    const [ onHidde, setOnHidde ] = useState( false )
    const { selectedMovie } = useSearchSlice()
    
    const {title, vote_average, overview, backdrop_path} = selectedMovie.user1

    const handleConfirm = () =>{
        confirm1()
    }

    const handleHidde = () =>{
        setOnHidde(!onHidde)
    }
    
    return (
        <div className={'card max-h-25 mb-3 mt-3 h-auto'}  >
            <img src={`https://image.tmdb.org/t/p/w500${ backdrop_path }`} className={`card-img-top ${onHidde == true && 'cardHidde'}`} alt={ title } />
            <div className="card-body">
                <h5 className={`card-title  ${onHidde == true && 'cardHidde'}`}>{ title }</h5>
                <p className={`card-text ${onHidde == true && 'cardHidde'}`}> { overview} </p>
                <p className={`card-text ${onHidde == true && 'cardHidde'}`}><small className="text-muted"> Vote average: { vote_average }</small></p>
                <button 
                    className={`btn ${isConfirmed1 ? 'btn-success' : 'btn-primary' }`} 
                    onClick={ handleConfirm }> 
                    Confirmar
                </button>
                <button 
                    className='btn btn-secondary m-2' 
                    onClick={ handleHidde }> 
                    {onHidde === true ? 'Mostrar' : 'Ocultar'}
                </button>
            </div>
        </div>
    )
}
