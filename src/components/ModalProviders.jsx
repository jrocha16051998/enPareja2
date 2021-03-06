import React from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { makerLinkProvider } from '../helpers/makerLinkProvider'
import { useGetProvidersQuery } from '../store/apis/moviesApi'
import { onModalChange } from '../store/uiSclice'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        width: '60%'
    },
}

Modal.setAppElement('#root')

export const ModalProvider = ( {id}) => {
   
    const { isModalOpen } = useSelector( state => state.ui)
    const { recomendedMovie } = useSelector( state => state.search)
    
    const dispatch = useDispatch()

    function closeModal() {
        dispatch( onModalChange ())
    }

    const { data } = useGetProvidersQuery( id )
   
    return (
        <>
            {   data?.results?.ES 
                ?
                <Modal
                    isOpen={isModalOpen}
                    
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="modal results providers"
                    
                >
                    
                    <div className='container'>
                        <div className='row'>
                            <h2 className='pb-3 col-8 text-start'>¿Dónde ver?</h2>
                            <button 
                                type="button col-4" 
                                className=" position-absolute btn-close mr-1 mt-1 end-0 m-3" 
                                aria-label="Close" 
                                onClick={closeModal}>
                            </button>
                        </div>
                        
                        <div className='row justify-content-around'>
                            <div className='col-lg-3 row-md'>
                                <h5>Con subscripción</h5>

                                <ul>
                                    {
                                        data.results.ES?.flatrate?.map( provider =>(
                                            <li key={provider.provider_id} className='p-1'>
                                                <a 
                                                    href={ makerLinkProvider(provider.provider_id, recomendedMovie.title )} 
                                                    target='_blank' rel='noopener noreferrer'> { provider.provider_name + ' '}</a>
                                                <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='logo'/>  
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='col-lg-3 row-md'>
                                <h5>Comprar</h5>
                                <ul>
                                    {
                                        data.results.ES?.buy?.map( provider =>(
                                            <li key={provider.provider_id} className='p-1'>
                                                <a 
                                                    href={ makerLinkProvider(provider.provider_id, recomendedMovie.title )} 
                                                    target='_blank' rel='noopener noreferrer'> { provider.provider_name + ' '}</a>
                                                <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='logo'/>  
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='col-lg-3 row-md'>
                                <h5>Alquilar</h5>
                                <ul>
                                    { //TODO: hacer href a cada pelicula a su distribuidor
                                        data.results.ES?.rent?.map( provider =>(
                                            <li key={provider.provider_id} className='p-1'>
                                                <a 
                                                    href={ makerLinkProvider(provider.provider_id, recomendedMovie.title )} 
                                                    target='_blank' rel='noopener noreferrer'> { provider.provider_name + ' '}</a>
                                                <img src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`} className='logo'/>  
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>    
                    </div> 
                </Modal>
                :
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="modal no reults">
                    <h3>Upsss.. parece que no hay provedores de streaming  que tengan esta pelicula</h3>
                </Modal>
            
            }
        
        
        </>

       
    )
}
