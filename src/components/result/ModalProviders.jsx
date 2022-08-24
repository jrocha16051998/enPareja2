import React from 'react'
import Modal from 'react-modal'
import { makerLinkProvider } from '../../helpers/makerLinkProvider'
import { useSearchSlice, useUiSlice } from '../../hooks'
import { useGetProvidersQuery } from '../../store/apis/moviesApi'


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
    const { modalChange, isModalOpen } = useUiSlice()
    const { recomendedMovie } = useSearchSlice()
    
    function closeModal() {
        modalChange()
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
                                                > { provider.provider_name + ' '}</a>
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
                                    { 
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
                    <h4>Upsss.. parece que no hay ninguna plataforma de streaming que tengan esta pelicula</h4>
                </Modal>
            
            }
        
        
        </>

       
    )
}
