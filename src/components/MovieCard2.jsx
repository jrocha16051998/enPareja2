import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux/es/hooks/useSelector'

import { onConfirm2 } from '../store/uiSclice'

export const MovieCard2 = () => {
    const [ onHidde, setOnHidde ] = useState( false )
    const dispatch = useDispatch()

    const { selectedMovie } = useSelector( state => state.search )
    const { isConfirmed2} = useSelector( state => state.ui )
    const { title, vote_average, overview, backdrop_path} = selectedMovie.user2

    const handleConfirm = () =>{
        dispatch( onConfirm2() )
    }
    
    const handleHidde = () =>{
        setOnHidde(!onHidde)
    }
    return (
        <div className={'card mb-3 max-h-25 mt-3 h-auto '}  >
            <img src={`https://image.tmdb.org/t/p/w500${ backdrop_path }`} className={`card-img-top ${onHidde == true && 'cardHidde'}`} alt={ title } />
            <div className="card-body">
                <h5 className={`card-title  ${onHidde == true && 'cardHidde'}`}>{ title }</h5>
                <p className={`card-text ${onHidde == true && 'cardHidde'}`}> { overview} </p>
                <p className={`card-text ${onHidde == true && 'cardHidde'}`}><small className="text-muted"> Vote average: { vote_average }</small></p>
                <button 
                    className={`btn ${isConfirmed2 ? 'btn-success' : 'btn-primary' }`}
                    onClick={ handleConfirm }>
                    {isConfirmed2 ? 'Confirmado' : 'Confirmar'}
                </button>
                <button 
                    className='btn btn-secondary m-2 '
                    onClick={ handleHidde }> 
                    {onHidde ? 'Mostrar' : 'Ocultar'}
                </button>
            </div>
        </div>
    )
}
