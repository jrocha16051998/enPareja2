import React from 'react'

export const Info = () => {
    return (
        <div className='container align-self-center pt-3 '>
            <div className='row text-center'>
                <div className='row'>
                    <hr />
                    <h2>¿Qué es EnPareja2?</h2>
                    <p className='p-1'>
                    EnPareja2 es esa web para cuando tú y tu pareja no se ponen de acuerdo en que película ver, aqui podras resolver ese problema
                    en segundos. Cada uno selecciona la película que desea ver y se buscara una recomendacíon basada en sus elecciones.
                    </p>
                    <hr />
                </div>
                <div className='row text-center'>
                    <h3> ¿Cómo se encuentra la película recomendada? </h3>
                    <p className='p-1'>
                    Para encontrar la película recomendada se realiza una busqueda basada en los géneros de ambas pèliculas seleccionadas.
                    Ademas de esto se puede incluir el proveedor de streaming que se prefiera o por defecto se no se aplicará este filtro.
                    </p>
                    <hr />
                </div>
                <div className='row text-center'>
                    <h5>Agradecimientos</h5>
                    <p className='p-1'>
                    Esta Pagina se pudo realizar gracias al API de <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'> The Movie DB</a> la cual 
                    nos brinda toda la informacion mostrada en esta página.
                        <br />
                    Tambíen agradecer a <a href='https://www.justwatch.com/' target='_blank' rel='noopener noreferrer'> JustWatch </a> por proporcionar los provedores.
                    </p>
                </div>
    
            </div>
            
        </div>
    )
}
