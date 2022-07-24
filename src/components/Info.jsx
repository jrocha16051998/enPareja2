import React from 'react'

export const Info = () => {
    return (
        <div className='container align-self-center p-3 '>
            <div className='row text-center'>
                <div className='row'>
                    <hr />
                    <h2>¿Qué es EnPareja2?</h2>
                    <p className='p-3'>
                    EnPareja2 está hecha para resolver un drama cotidiano, ese drama que surge cuando dos personas no se ponen 
                    de acuerdo en que película ver 😫. Para resolver ese problema necesitamos que cada uno elija una película de su agrado y 
                    nosotros nos encarcargaremos de recomendarte una basada en las que eligieron 😃.
                        <br />
                    También puedes seleccionar tu plataforma de streaming favorita para que la película recomendada se encuentre en ella.

                    </p>
                    <hr />
                </div>
                <div className='row text-center'>
                    <h3> ¿Cómo se encuentra la película recomendada? </h3>
                    <p className='p-3'>
                    Una vez elijan las películas que quieran ver se hará una busqueda basada en los géneros.
                        <br />
                    Si se añade una plataforma de streaming, tambien se aplicará a la busqueda.
                    </p>
                    <hr />
                </div>
                <div className='row text-center'>
                    <h5>Agradecimientos</h5>
                    <p className='p-3'>
                    Esta Pagina se pudo realizar gracias a los datos proporcionados por <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'> The Movie DB</a> 
                        <br />
                    Tambíen agradecer a <a href='https://www.justwatch.com/' target='_blank' rel='noopener noreferrer'> JustWatch </a> por proporcionar los provedores.
                    </p>
                </div>
    
            </div>
            
        </div>
    )
}
