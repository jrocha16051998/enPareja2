
import { useDispatch, useSelector } from 'react-redux'
import { addRecomendedMovie, onClear, onEditGenresIds, onMatch, onNoRecomended, onSearch, onSelectMovie1, onSelectMovie2 } from '../store/searchSlice'

export const useSearchSlice = () => {
    const dispatch = useDispatch()
    const { results, user, selectedMovie, isSelected, noRecomended, genresIds, match, recomendedMovie} = useSelector( state => state.search)

    const search = (results, user) =>{
        dispatch( onSearch( { results, user} ))
    }
    const selectMovie1 = ( movie ) =>{
        dispatch( onSelectMovie1( {movie} ))
    }
    const selectMovie2 = (movie) =>{
        dispatch( onSelectMovie2( {movie}) )
    }
    const addRecomended = ( movie ) =>{
        dispatch( addRecomendedMovie( movie ) ) 
    }
    const onCallMatch = () =>{
        dispatch( onMatch())
    }
    const onCallNoRecomended = () =>{
        dispatch( onNoRecomended())
    }
    const clear = () =>{
        dispatch( onClear())
    }
    const editGenres = (genres) =>{
        dispatch( onEditGenresIds( genres ))
    }



    return{
        search,
        selectMovie1,
        selectMovie2,
        addRecomended,
        onCallMatch,
        onCallNoRecomended,
        clear,
        editGenres,
        results, 
        user, 
        selectedMovie, 
        isSelected, 
        noRecomended, 
        genresIds, 
        match,
        recomendedMovie,

    }
}
