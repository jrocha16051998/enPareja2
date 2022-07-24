import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetSearchProvidersQuery } from '../store/apis/moviesApi'
import { onDelProviders, onSearchProviders, onSelectedProviders } from '../store/searchProvidersSlice'
import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import x from '../images/x.svg'
import { useNavigate } from 'react-router-dom'
import { animateScroll as scroll} from 'react-scroll'

export const SearchProvider = () => {
    const { providersSearched, selectedProviders } = useSelector( state => state.searchProviders )
    const dispatch = useDispatch()
    const [formSearch, setFormSearch] = useState('')
    const { data = [] } = useGetSearchProvidersQuery()
    const { results = [] } = data
    const navigate = useNavigate()

    useEffect(() => {
        scroll.scrollToTop({duration: 20, smooth:true})
    }, [])
        
    
    const handleInputChange = ({ target }) =>{
        setFormSearch( target.value )
        dispatch ( onSearchProviders( results.filter(provider => provider.provider_name.toLowerCase().includes(formSearch.toLowerCase()))))
    }
    
    const handleClickOnProvider = ({ provider_name, provider_id}) =>{
        let providerIslisted = false
        selectedProviders?.map( p  => {
            if (p.provider_id === provider_id) {providerIslisted = true}
        })
        
        if ( !providerIslisted){
            dispatch( onSelectedProviders( {provider_name, provider_id}) )
            setFormSearch('')
        }else{
            setFormSearch('')
        }
    }

    const handleClickRemoveProvider = (index) =>{
        dispatch( onDelProviders( index ))
    }
    const handleClickNext = () =>{
        navigate('/result')
    }
   
    return (
        <>
            <Header />
            <h3 className='text-center pt-3'>Elige tus plataformas de películas favoritas</h3>
            <p className='text-center pt-2'>Si eliges la alguna plataforma nos encargaremos de recomendarte alguna pelicula que se encuentre en ella
                <br />
                Puedes continuar sin seleccionar ninguna y se te recomendará de cualquier plataforma
            </p>
            <div className="container ">
                <div className="row justify-content-center align-items-center pb-2">
                    <input 
                        className="form-control m-2 w-50 col-xs-12 animate__animated animate__pulse" 
                        type="search" placeholder="Netflix..." 
                        aria-label="Buscar proveedor"
                        name='search'
                        value={ formSearch }
                        onChange={ handleInputChange }
                        autoComplete='off'
                    >
                    </input>
                    {
                        formSearch.length > 0 &&
                    <ul className="list-group col-9 w-50 mt-1 overflow-auto" style={{maxHeight: '400px'}}>
                        {
                            providersSearched.map((provider) =>(
                                <li
                                    key={ provider.provider_id } 
                                    className="list-group-item li-results"
                                    onClick={ () => handleClickOnProvider (provider) }
                                >{ provider.provider_name }</li>
                            ))
                        }
                    </ul>
                    }
                </div>
                
                <div className='row justify-content-center'>
                    <ul className='list-group w-50 text-center '>
                        {
                            selectedProviders?.map((provider, index)=>(
                                <li 
                                    className='d-flex justify-content-between pb-1' 
                                    key={provider.provider_id}>{provider.provider_name} 
                                    <img 
                                        src={x} 
                                        className='hover' 
                                        onClick={() =>handleClickRemoveProvider(index)} 
                                        alt={`Borrar ${provider.provider_name}`}>
                                    </img></li>
                            ))
                        }
                    </ul>
                    
                </div>
                <div className='row justify-content-center pt-2'>
                    <button
                        className='btn btn-secondary w-50'
                        onClick={ handleClickNext }
                    > Siguiente </button>
                </div>
                
            </div>
            <Info />
            <Footer/>
        </>
    )
}
