
import { useDispatch, useSelector } from 'react-redux'
import { onDelProviders, onSearchProviders, onSelectedProviders } from '../store/searchProvidersSlice'

export const useSearchProvidersSlice = () => {
    const dispatch = useDispatch()
    const { providersSearched, selectedProviders} = useSelector( state => state.searchProviders)

    const searchProviders = ( providers ) =>{
        dispatch( onSearchProviders( providers ))
    }
    const selectProviders = ( provider ) =>{
        dispatch(onSelectedProviders( provider ))
    }
    const deleteProviders = (provider) =>{
        dispatch( onDelProviders( provider ))
    }
    return{
        searchProviders,
        selectProviders,
        deleteProviders,
        providersSearched, 
        selectedProviders
        
    }
}
