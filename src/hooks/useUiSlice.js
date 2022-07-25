import { useDispatch, useSelector } from 'react-redux'
import { onClearUi, onConfirm1, onConfirm2, onModalChange } from '../store/uiSclice'


export const useUiSlice = () => {
    const dispatch = useDispatch()
    const { isConfirmed1, isConfirmed2, isModalOpen} = useSelector( state => state.ui )

    const confirm1  = () =>{
        dispatch( onConfirm1())
    }
    const confirm2  = () =>{
        dispatch( onConfirm2())
    }

    const modalChange = () =>{
        dispatch( onModalChange ())
    }

    const clearUi = () =>{
        dispatch( onClearUi() )
    }

    return{
        confirm1,
        confirm2,
        modalChange,
        clearUi,
        isConfirmed1,
        isConfirmed2,
        isModalOpen
    }
  
}
