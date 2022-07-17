import React from 'react'

export const Info = () => {
    return (
        <div className='container'>
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
                <div>
                    <h3> ¿Cómo se encuentra la película recomendada? </h3>
                    <p className='p-1'>
                    Para encontrar la película recomendada se obienten películas similares a cada una de las seleccionadas
                    y se comparan entre si.
                        <br/>
                    Las películas similares estan basadas en palabras claves y generos,
                    por lo cual la recomendación debería ser similar a las seleccionadas.
                    Como máximo se comparan 4000 películas, si no se encuetra una recomendación es porque las películas 
                    no son muy compatibles entre si y se deberia probar con otras
                    </p>
                    <hr />
                </div>
                <div className='row'>
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
