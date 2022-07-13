import React from 'react'

export const Info = () => {
    return (
        <div className='container'>
            <div className='row text-center'>
                <div className='row'>
                    <h2>¿Qué es EnPareja2?</h2>
                    <p className='p-1'>
                    EnPareja2 es esa web para cuando tú y tu pareja no se ponen de acuerdo en que pelicula ver, aqui podras resolver ese problema
                    en segundos. Cada uno selecciona la pelicula que desea ver y se buscara una recomendacíon basada en sus elecciones.
                    </p>
                </div>
                <div>
                    <h3> ¿Cómo se encuentra la pelicula recomendada? </h3>
                    <p className='p-1'>
                    Lo que se hace es comparar las peliculas similares de cada una de las seleccionadas,
                    esto se hace con maximo de 400 peliculas, ya que creo que si en 4000 resultados no hay coincidencias
                    la recomendacion no seria buena.
                    </p>
                </div>
                <div className='row'>
                    <h5>Agradecimientos</h5>
                    <p className='p-1'>
                    Esta Pagina se pudo realizar gracias al API de <a href='https://www.themoviedb.org/'> The Movie DB</a> la cual 
                    nos brinda toda la informacion mostrada en esta página.
                    </p>
                    <p>
                    Tambíen agradecer a <a href='https://www.justwatch.com/' target='_blank' rel='noopener noreferrer'> JustWatch </a> por proporcionar los provedores.
                    </p>
                </div>
    
            </div>
            
        </div>
    )
}
